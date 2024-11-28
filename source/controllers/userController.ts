import * as userManagementService from "../managementService/userManagementService"; // Corrected import path

export const addMessage = async (request: Request,response: (response: Response) => void): Promise<void> => {
  try {   
    await userManagementService.addMessage(request,response);
  } catch (error) {
    console.error("Error handling message:", error);  
  }
};
