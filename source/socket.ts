import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";
import * as cons from "./Constant";
import { router } from '../source/routes';  

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: cons.EnvConfigValues.AllowedCrossDomains.length > 0 ? cons.EnvConfigValues.AllowedCrossDomains : "*",
  },
});

io.on("connection", (socket) => {
  console.log(`Socket with id ${socket.id} connection`);
  // Use the router to handle socket events
  router(socket); // Call the router, passing the socket instance

  // Listen for the disconnect event
  // socket.on("disconnect", () => {
  //   console.log(`Socket with id ${socket.id} disconnected`);
  //   // Optionally, perform cleanup or logging here when a client disconnects
  // });
});

export { app, server, io };
