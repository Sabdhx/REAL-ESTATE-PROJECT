import {Server, Socket} from "socket.io"

const io = new Server({
  cors:{
    origin: "http://localhost:5173"
  },
});
console.log("hellow")
io.on("connection", (socket) => {
  socket.on("test", (socket)=>{
    console.log(socket)
  })
})

io.listen(4000)