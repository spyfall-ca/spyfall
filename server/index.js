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
const players = {}

const leaveGameCleanup = (socket) => {

  // getting the room ID from players object
  const roomID = players[socket.id]
  
  if (roomID) {
    const room = rooms[roomID]

    // check to see if player is host 
    if (room.host === socket.id) {
      
      // redirecting all players to home page
      socket.to(socket.id).emit("joinRoomSuccess", false)

      // delete entire room object 
      delete rooms[roomID]
    } 
    else { 

      // deleting players information from room object
      let result = room.players.filter(player => player.id !== socket.id)
      rooms[roomID].players = result
    }
    delete players[socket.id]
  }
}

io.on("connection", (socket) => {
  console.log("a user connected", socket.id, socket.rooms);

  socket.on("createRoom", (playerName) => {
    try {
      if (socket.id) {
        rooms[socket.id] = {
          players: [{
            id: socket.id,
            name: playerName
          }],
          host: socket.id
        }
        players[socket.id] = socket.id 
        socket.emit("joinRoomSuccess", true)
        console.log("ROOMSOBJECT", rooms)
        console.log("CREATE", socket.id, socket.rooms)
      }
    } catch (err) {
      console.log(err)
      socket.emit("joinRoomSucess", false)
    }
  })
  
  socket.on("joinRoom", (roomCode, playerName) => {
    try {
      if (rooms[roomCode]) {
        rooms[roomCode]["players"].push({
          id: socket.id,
          name: playerName,
        })
        players[socket.id] = roomCode
        socket.join(roomCode);
        socket.emit("joinRoomSuccess", true)
        
        console.log("JOIN", socket.id, socket.rooms)
        console.log("ROOMS", rooms, rooms[roomCode]["players"])
      } else {
        socket.emit("Error", "Invalid Room ID")
      }
    } catch (err) { 
      console.log(err)
      socket.emit("joinRoomSuccess", false)
    } 
  })
  
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    leaveGameCleanup(socket)
  });

  socket.on("leaveGame", () => {
    const roomCode = players[socket.id]
    if (roomCode) {
      socket.leave(roomCode)
      socket.emit('joinRoomSuccess', false)
      leaveGameCleanup(socket)
    }
  })
});

server.listen(port, () => {
  console.log('running on port')
})