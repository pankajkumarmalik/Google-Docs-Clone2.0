// import io from "socket.io";
// const io= io();

const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost: 3000",
    methods: ["GET", "POST"],
  },
});