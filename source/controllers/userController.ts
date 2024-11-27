import * as userManagementService from "../managementService/userManagementService"; // Corrected import path

export const addMessage = async (request: any,callback?: (response: any) => void): Promise<void> => {
  try {   
    await userManagementService.addMessage(request,callback);
  } catch (error) {
    console.error("Error handling message:", error);  
  }
};
