const path = require('path')
const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = socketio(server)
const port = process.env.PORT || 3000

const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

// server --> client => updatedCount
// client --> server => increment


let count = 0

 io.on('connection', (socket) => {
   console.log('New Websocket Connection')
   socket.emit('updatedCount', count)
   socket.on('increment', () => {
     count++
    //  socket.emit('updatedCount', count)
     io.emit('updatedCount', count)
   })
 })

server.listen(port, ()=>{
  console.log(`Server is up on port ${port}`)
})
