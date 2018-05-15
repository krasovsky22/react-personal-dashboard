const io = require('./index').io

const { CONNECTED, NEW_MESSAGE, INITIALIZE_USER, GET_USERS } = require('./events')

var connectedClients = {}

module.exports = function (socket) {
  io.emit(CONNECTED, { socketId: socket.id })

  socket.on(INITIALIZE_USER, data => {
    console.log('initialiazing new user:', data)
    const { username, socketId } = data
    connectedClients[socketId] = { username, socketId }
    console.log('connected clients:', connectedClients)
  })

  socket.on('new_message', data => {
    console.log('new_message_recieved:', data)
  })

  socket.on('disconnect', () => {
    console.log('dictonnecting...', socket.id)
    delete connectedClients[socket.id]
    console.log('new connected clients', connectedClients)
  })
}
