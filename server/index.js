import dotenv, { config } from "dotenv";
import express from "express";
dotenv.config();

import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";
import MessageRoutes from "./routes/MessageRoutes.js";
import { Server, Socket } from "socket.io";
// const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/uploads/recordings", express.static("uploads/recordings"));
app.use("/uploads/images", express.static("uploads/images"));

app.use("/api/auth", AuthRoutes);
app.use("/api/messages", MessageRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

global.onlineUsers = new Map();
const activeCalls = new Map();

io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    // when user get connected
    onlineUsers.set(userId, socket.id);
    socket.broadcast.emit("online-users", {
      // send emit to all users [except] current user
      onlineUsers: Array.from(onlineUsers.keys()),
    });
  });

  socket.on("signout", (id) => {
    // when user logout remove it from online users
    onlineUsers.delete(id);
    socket.broadcast.emit("online-users", {
      // now agian send emit to all users
      onlineUsers: Array.from(onlineUsers.keys()),
    });
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to); // get user socket which current user sending message
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", {
        // send message to that user
        from: data.from,
        message: data.message,
      });
    }
  });

  socket.on("outgoing-voice-call", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("incoming-voice-call", {
        from: data.from,
        roomId: data.roomId,
        callType: data.callType,
      });
    }
  });

  socket.on("accept-incoming-call", ({ id }) => {
    const sendUserSocket = onlineUsers.get(id);
    socket.to(sendUserSocket).emit("accept-call");
  });

  // If user 2 disconnect the call data.from is user 1, and user 1 will listen to voice call rejected socket
  socket.on("reject-voice-call", (data) => {
    const sendUserSocket = onlineUsers.get(data.from); // data.from is id of another person which did not reject the voice call
    console.log("sendUserSocket: ", sendUserSocket);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("voice-call-rejected"); // send voice call rejected to that user
    }
  });

  // [ No video call needed ]
  // socket.on("outgoing-video-call", (data) => {
  //   const sendUserSocket = onlineUsers.get(data.to);
  //   if (sendUserSocket) {
  //     socket.to(sendUserSocket).emit("incoming-video-call", {
  //       from: data.from,
  //       roomId: data.roomId,
  //       callType: data.callType,
  //     });
  //   }
  // });

  // [ No video call needed ]
  // socket.on("reject-video-call", (data) => {
  //   const sendUserSocket = onlineUsers.get(data.from);
  //   if (sendUserSocket) {
  //     socket.to(sendUserSocket).emit("video-call-rejected");
  //   }
  // });
});
