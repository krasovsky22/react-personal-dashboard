const io = require('./index').io

const { CONNECTED, NEW_MESSAGE, INITIALIZE_USER, USER_ALREADY_CONNECTED, INITIALIZATION_COMPLETED, GET_USERS } = require('./events')

var connectedClients = {}

module.exports = function (socket) {
  io.emit(CONNECTED, { socketId: socket.id })

  socket.on(INITIALIZE_USER, data => {
    const { username, socketId } = data

    console.log('current clients:', connectedClients)
    if (username in connectedClients && socket.id !== connectedClients[username].socketId) {
      connectedClients[username].socketIds.push(socket.id)
    } else {
      connectedClients = addClient(connectedClients, { username, socketIds: [socketId] })
    }

    socket.user = { username, socketId }
    socket.emit(INITIALIZATION_COMPLETED, { username, socketId })
  })

  socket.on('disconnect', () => {
    if ('user' in socket) {
      connectedClients = removeClient(connectedClients, socket.user.username)
      console.log('dictonnecting...', socket.id, socket.user.username)
    }
    console.log('new connected clients', connectedClients)
  })

  socket.on(NEW_MESSAGE, data => {
    console.log('incomming message data:', data)
    const { username, message } = data
    io.emit(NEW_MESSAGE, { username: username, message: `${username} said: ${message}` })
  })
}

function addClient (clientList, client) {
  let newList = Object.assign({}, clientList)
  newList[client.username] = client
  return newList
}

function removeClient (clientList, username) {
  let newList = Object.assign({}, clientList)
  delete newList[username]
  return newList
}
