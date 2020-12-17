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

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("createRoom", () => {
    if (socket.id) {
      rooms[socket.id] = {
        players: [socket.id],
        host: socket.id
      }
    }
  })
  
  socket.on("joinRoom", (roomCode) => {
    if (rooms[roomCode]) {
      rooms[roomCode]["players"].push(socket.id)
      socket.join(roomCode);
      socket.emit("joinRoomSuccess", true)
    }
    console.log("ROOMS", rooms)
  })
  
  socket.on("sendMessage", (message) => {
    console.log(rooms)
  })

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

server.listen(port, () => {
  console.log('running on port')
})