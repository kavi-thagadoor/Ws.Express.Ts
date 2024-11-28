import { io } from "../socket";

// The addMessage function now accepts io and callback as arguments
export const addMessage = async (request: any, response: (response: string) => void): Promise<void> => {
    try {
        console.log("Message received:", request);

        // Simulate an async operation (e.g., saving data)
        setTimeout(() => {
            // Acknowledge the sender (callback is triggered after async operation)
            if (typeof response === "function") {
                response(`Server successfully processed your message: "${request}"`);
            }

            // Broadcast the message to all connected clients
            io.emit("message", request);
        }, 1); // Simulate async operation with a timeout
    } catch (error) {
        console.error("Error processing message:", error);

        // Send error response if an error occurs
        if (typeof response === "function") {
            response("An error occurred while processing your message.");
        }
    }
};
