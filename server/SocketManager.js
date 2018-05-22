const io = require('./index').io

const { CONNECTED, NEW_MESSAGE, INITIALIZE_USER, USER_ALREADY_CONNECTED, INITIALIZATION_COMPLETED, GET_USERS } = require('./events')

var connectedClients = {}

module.exports = function (socket) {
  socket.emit(CONNECTED, { success: true })

  socket.on(INITIALIZE_USER, data => {
    const { username } = data
    connectedClients = addClient(connectedClients, username, socket)

    socket.user = username
    //send complete response to current socket
    socket.emit(INITIALIZATION_COMPLETED, { username, socketId: socket.id })
  })

  socket.on('disconnect', () => {
    if ('user' in socket) {
      connectedClients = removeClient(connectedClients, socket)
    }
  })

  socket.on(NEW_MESSAGE, data => {
    const { username, message } = data
    console.log('NEW MEssage', data)
    io.emit(NEW_MESSAGE, { type: 'reply', username, message })
  })
}

function addClient (clientList, username, socket) {
  let newList = Object.assign({}, clientList)
  /*
    we keep list of all connected sockets for the same user
    in case they have opened multiple tabs
  */
  if (username in newList) {
    newList[username].push(socket)
  } else {
    newList[username] = [socket]
  }
  return newList
}

function removeClient (clientList, socket) {
  let newList = Object.assign({}, clientList)
  const newSocketList = newList[socket.user].filter(tSocket => tSocket.id !== socket.id)
  if (newSocketList.length === 0) {
    delete newList[socket.user]
  } else {
    newList.sockets = newSocketList
  }

  return newList
}
