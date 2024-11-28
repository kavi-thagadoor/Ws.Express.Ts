import { io } from '../../socket'; 
import * as coll from '../../model/coll';

export const getMessage = async (request?: any): Promise<void> => {
  try {
    
    const message = await coll._Chat().findById(request);
    // Emit the message to all connected clients
    io.emit("message", message?.msg);

    // console.log("Message broadcasted:", message?.msg);
  } catch (error) {
    console.error("Error broadcasting message:", error);
  }
};

 // Emit the message to specific connected clients
 
// export const getMessage = async (request?: { clientId: string; message: any }): Promise<void> => {
//   try {
//     if (!request || !request.clientId || !request.message) {
//       console.error("Invalid request. 'clientId' and 'message' are required.");
//       return;
//     }

//     const { clientId, message } = request;

//     // Send message to the specific client identified by clientId
//     const targetSocket = io.sockets.sockets.get(clientId);

//     if (targetSocket) {
//       targetSocket.emit("message", message);
//       console.log(`Message sent to client ${clientId}:`, message);
//     } else {
//       console.error(`Client with ID ${clientId} not found.`);
//     }
//   } catch (error) {
//     console.error("Error sending message to client:", error);
//   }
// };
