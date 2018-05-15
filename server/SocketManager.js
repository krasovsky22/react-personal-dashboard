const io = require('./index').io

const { NEW_MESSAGE } = require('./events')

const connectedUsers = []

module.exports = function (socket) {
  console.log('Socket id:', socket.id)

  socket.on('new_message', data => {
    console.log('new_message_recieved:', data)
  })
}
