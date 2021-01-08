const express = require("express")
const http = require("http")
const socketIo = require("socket.io")

const port = process.env.PORT || 5000
const router = require('./router')
const app = express()
app.use(router)

const server = http.createServer(app)

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

const rooms = {}

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

const startTimer = (socket) => {
  let time = 480

  const countDown = setInterval(() => {
    io.in(socket.hostID).emit("countdown", time)
    time--
    if(time < 0) {
      clearInterval(countDown)
    }
  }, 1000)
}

io.on("connection", (socket) => {
  console.log("a user connected", socket.id, socket.rooms);

  socket.onAny(() => {
    console.log("ROOMS", rooms)
  })

  socket.on("createRoom", (playerName) => {
    rooms[socket.id] = {
      players: [{
        id: socket.id,
        name: playerName
      }],
      host: socket.id
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
    // assign spy
    
  /* random num = random(0, num(locations))
  location = locations[num]

  random num = random(0, num(players))
  player[num].role = spy

  [role1, role2, role3, role4]

  [role2, role3]

  loop through players {
    if they dont have role {
      player[i].role = randomRoles[counter]
      counter++
    }
  } */

    // assign roles
    
    // navigate all players to game page 
    io.in(socket.hostID).emit("startGameSuccess", true)

    // start timer 
    startTimer(socket);
  })

  socket.on("startNewGame", () => {
    io.in(socket.hostID).emit("startGameSuccess", false)
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