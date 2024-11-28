import * as userManagement from "../management/userManagement/userManagement";

export const addMessage = async (request: any,response: (response: any) => void): Promise<void> => {
  try {
    await userManagement.addMessage(request,response);
  } catch (error) {
    console.error("Error processing message:", error);
  }
};
