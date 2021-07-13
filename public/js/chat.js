const socket = io()

socket.on('updatedCount', (count) => {
  console.log('Count has been updated!', count)
})

document.querySelector('#increase').addEventListener("click", () => {
  console.log('clicked!')
  socket.emit('increment')
})