import express from 'express'
import http from 'http'
import createGame from './game.js'
import socketio from 'socket.io'

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

const game = createGame()

game.addPlayer({ playerId: 'player1' , playerX: 0 , playerY: 7 })
game.addFruit({ fruitId: 'fruit1' , fruitX: 6 , fruitY: 2})

console.log(game.state)

sockets.on('connection' , (socket) => {
    const playerId = socket.id
    console.log(`Player Connected with Id: ${playerId}`)
})

app.use(express.static('public'))

server.listen(3000 , () => {
    console.log(`Server Listening on port: 3000`)
})