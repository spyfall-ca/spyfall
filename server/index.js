const express = require("express")
const http = require("http")
const socketIo = require("socket.io")

const port = process.env.PORT || 6190
const router = require('./router')
const app = express()
app.use(router)

const server = http.createServer(app)

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5000",
    methods: ["GET", "POST"]
  }
})

const rooms = {}
const locationRoleFile = require("./locationAndRoles.json")

const shuffleArray = (a) => {
  var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const getRandomInt = (num) => {
  return Math.floor(Math.random() * Math.floor(num));
}

const getLocation = () => {
  let index = getRandomInt(locationRoleFile.length)
  let location = locationRoleFile[index]
  return location
}

const leaveGameCleanup = (socket, roomCode) => {

  // check to see if player joined room
  if (rooms[socket.hostID]) {

    // check to see if player is host 
    if (socket.hostID === socket.id) hostLeaveGameCleanup(socket)
    else playerLeaveGameCleanup(socket, roomCode)

    socket.hostID = undefined
  }
}

const hostLeaveGameCleanup = (socket) => {

  // redirecting all players to home page
  try {
    io.in(socket.hostID).emit("startGameSuccess", false)
    io.in(socket.hostID).emit("joinRoomSuccess", false)
    io.in(socket.hostID).emit("sendGameState", null)
  }
  catch (error) {
    console.log(error)
  }

  delete rooms[socket.hostID]
}

const playerLeaveGameCleanup = (socket, roomCode) => {
  
  // redirecting player 
  try {
    socket.emit("startGameSuccess", false)
    socket.emit("joinRoomSuccess", false)
  }
  catch (error) {
    console.log(error)
  }

  // deleting players information from room object
  let result = rooms[socket.hostID].players.filter(player => player.id !== socket.id)
  rooms[socket.hostID].players = result

  // sending updated player list and leaving the channel
  try {
    io.in(socket.hostID).emit("sendGameState", rooms[socket.hostID])
    socket.leave(roomCode)
  } 
  catch (error) {
    console.log(error)
  }
}

io.on("connection", (socket) => {
  console.log("a user connected", socket.id, socket.rooms);

  socket.on("createRoom", (playerName) => {
    rooms[socket.id] = {
      players: [{
        id: socket.id,
        name: playerName
      }],
      host: socket.id,
      inProgress: false, 
    }
    try {
      socket.hostID = socket.id
      socket.emit("sendGameState", rooms[socket.hostID])
      socket.emit("joinRoomSuccess", true)
    } catch (err) { 
      console.log(err)
      socket.emit("joinRoomSucess", false)
    }
  })

  socket.on("joinRoom", (roomCode, playerName) => {
    if (rooms[roomCode]) {
      rooms[roomCode]["players"].push({
        id: socket.id,
        name: playerName,
      })
      socket.hostID = roomCode
      try {
        socket.join(roomCode);
        io.in(socket.hostID).emit("sendGameState", rooms[roomCode]) 
        socket.emit("joinRoomSuccess", true)
      } catch (err) { 
        console.log(err)
      } 
    } else {
      socket.emit("Error", "Invalid Room ID")
    }
  })

  socket.on("startGame", () => {

    // getting the location and roles
    const locationData = getLocation()
    const rolesArray = shuffleArray(locationData.roles)

    // saving location and image name in object
    rooms[socket.hostID].location = locationData.location
    rooms[socket.hostID].image = locationData.image

    // getting the players
    let players = rooms[socket.hostID].players

    // assign spy
    let spyIndex = getRandomInt(players.length)
    players[spyIndex].role = "Spy"

    // assigning the rest of the roles
    let j = 0;
    for (let i = 0; i < players.length; i++) { 
      if (i !== spyIndex) {
        rooms[socket.hostID].players[i]["role"] = rolesArray[j]
      }
      j++;
      if (j >= rolesArray.length) j = 0;
    }

    rooms[socket.hostID].inProgress = true;

    // send data and navigate all players to game page
    try {
      io.in(socket.hostID).emit("sendGameState", rooms[socket.hostID])  
      io.in(socket.hostID).emit("startGameSuccess", true)
    } 
    catch (error) {
      console.log(error)
    }
  })

  socket.on("startNewGame", () => {

    rooms[socket.hostID].inProgress = false;
    const playersList = rooms[socket.hostID].players
    let spy;

    // finding spy and resetting roles
    for (let i=0; i < playersList.length; i++) {
      if (playersList[i].role === "Spy") {
        spy = playersList[i].name
      }
      rooms[socket.hostID].players[i].role = undefined
    }

    try {

      // redirecting all players to the lobby page
      io.in(socket.hostID).emit("revealSpy", spy)
      io.in(socket.hostID).emit("sendGameState", rooms[socket.hostID])
      io.in(socket.hostID).emit("startGameSuccess", false)
    }
    catch (error) {
      console.log(error)
    }

  })
  
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    leaveGameCleanup(socket)
  });

  socket.on("leaveGame", () => {
    const roomCode = socket.hostID
    if (roomCode) {
      leaveGameCleanup(socket, roomCode) 
    }
  })
});

server.listen(port, () => {
  console.log('running on port')
})