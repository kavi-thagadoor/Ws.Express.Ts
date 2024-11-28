import * as userManagement from "../management/userManagement/userManagement";
import * as typ from "../utils/types";

export const addMessage = async (request: any,response: (response: typ.GeneralResponse) => void): Promise<void> => {
  try {
    await userManagement.addMessage(request,response);
  } catch (error) {
    console.error("Error processing message:", error);
  }
};

export const getMessages = async (request: any,response: (response: any) => void): Promise<void> => {
  try {
    await userManagement.getMessages(request,response);
  } catch (error) {
    console.error("Error processing message:", error);
  }
};

export const deleteMessage = async (request: any,response: (response: any) => void): Promise<void> => {
  try {
    await userManagement.deleteMessage(request,response);
  } catch (error) {
    console.error("Error processing message:", error);
  }
};

export const editMessage = async (request: any,response: (response: any) => void): Promise<void> => {
  try {
    await userManagement.editMessage(request,response);
  } catch (error) {
    console.error("Error processing message:", error);
  }
};

