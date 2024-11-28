import * as userController from './controllers/userController';
import { io } from './socket';


// emit - post method from server
// on - get method from client

export const router = (socket: any) => {

  socket.on("message", (request: Request, response: (response: Response) => void) => {userController.addMessage(request, response);});
 
  
};
