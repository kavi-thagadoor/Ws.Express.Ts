import * as userManagement from "../management/userManagement";

export const addMessage = async (request: any,callback?: (response: any) => void): Promise<void> => {
  try {
    await userManagement.addMessage(request,callback);
  } catch (error) {
    console.error("Error processing message:", error);
  }
};
