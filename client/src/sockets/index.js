import io from 'socket.io-client'

export const initiateSocket = () => {
  const socket = io('http://localhost:6190');
  console.log(`Connecting socket...`);
  return socket
}