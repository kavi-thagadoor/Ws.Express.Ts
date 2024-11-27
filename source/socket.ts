import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";
import * as cons from "./Constant";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin:  cons.EnvConfigValues.AllowedCrossDomains.length > 0 ? cons.EnvConfigValues.AllowedCrossDomains : "*",
  },
});


export { app, server, io };
