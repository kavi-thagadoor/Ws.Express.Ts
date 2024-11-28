import * as userManagementService from "../managementService/userManagementService"; 

export const addMessage = async (request: Request,response: (response: any) => void): Promise<void> => {
  try {   
    await userManagementService.addMessage(request,response);
  } catch (error) {
    console.error("Error handling message:", error);  
  }
};

export const getMessages = async (request: Request,response: (response: Response) => void): Promise<void> => {
  try {   
    await userManagementService.getMessages(request,response);
  } catch (error) {
    console.error("Error handling message:", error);  
  }
};

export const deleteMessage = async (request: Request,response: (response: Response) => void): Promise<void> => {
  try {   
    await userManagementService.deleteMessage(request,response);
  } catch (error) {
    console.error("Error handling message:", error);  
  }
};

export const editMessage = async (request: Request,response: (response: Response) => void): Promise<void> => {
  try {   
    await userManagementService.editMessage(request,response);
  } catch (error) {
    console.error("Error handling message:", error);  
  }
};


