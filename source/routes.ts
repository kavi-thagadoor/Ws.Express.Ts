import { io } from "./socket";
import * as userController from './controllers/userController';

io.on("connection", (socket) => {  

  socket.on("message", (request, callback) => userController.addMessage(request, callback));

  socket.on("disconnect", () => {});
});
