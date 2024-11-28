import * as userController from './controllers/userController';


// emit - post method from server
// on - get method from client

export const router = (socket: any) => {

  // app.get('/version', versionController.version);
  socket.on("message", (request: Request, response: (response: Response) => void) => {userController.addMessage(request, response);});
  socket.emit("messages", (request: Request, response: (response: Response) => void) => {userController.getMessages(request, response);});
  socket.on("deleteMessage", (request: Request, response: (response: Response) => void) => {userController.deleteMessage(request, response);});
  socket.on("editMessage", (request: Request, response: (response: Response) => void) => {userController.editMessage(request, response);});
};
