import moment from "moment";
import * as typ from "../../utils/types";
import * as userEmitResponse from "../userManagement/userResponseManagement";
import * as IntCol from "../../model/collectionAlias";
import * as coll from '../../model/coll';
import { FieldName } from "../../model/collectionName";

export const addMessage = async (request: typ.chat, response: (response: typ.GeneralResponse) => void): Promise<void> => {
    try {
        console.log("Message received:", request);

        const contentInt = {
            Message: request.message,
            CreatedOn: moment.utc().toDate(),
            IsActive: 1
        } as IntCol.Chat;

        const newMessage = await coll._Chat().create(contentInt);
        if (newMessage) {
            const successResponse: typ.GeneralResponse = {
                message: "Message inserted successfully",
              };
        
              response(successResponse);
            // response(`Message Insert Successfully: "${request}"`);
            userEmitResponse.getAllMessage();
            // userEmitResponse.getMessage(newMessage._id.toString());
        } else {
            const successResponse: typ.GeneralResponse = {
                message: "Message inserted failed",
              };
        
              response(successResponse);
            // response(`Message Not Insert: "${request}"`);
        }
        // setTimeout(() => {           
        //     if (typeof response === "function") {
        //         response(`Server successfully processed your message: "${request}"`);
        //     }                 
        // }, 1); 
    } catch (error) {
        console.error("Error processing message:", error);
        if (typeof response === "function") {
            const successResponse: typ.GeneralResponse = {
                message: "Message inserted failed",
              };
        
              response(successResponse);
        }
    }
};

export const getMessages = async (request: any, response: (response: string) => void): Promise<void> => {
    try {
        setTimeout(() => {
            userEmitResponse.getAllMessage();
        }, 1);
    } catch (error) {
        console.error("Error processing message:", error);
        if (typeof response === "function") {
            response("An error occurred while processing your message.");
        }
    }
};

export const deleteMessage = async (request: typ.GeneralResponse, response: (response: typ.GeneralResponse) => void): Promise<void> => {
    try {
        const deleteMessage = await coll._Chat().findByIdAndDelete(request.id);
        if (deleteMessage) {
            const successResponse: typ.GeneralResponse = {
                message: "Message Delete successfully",
              };
        
              response(successResponse);
            // response(`Message Insert Successfully: "${request}"`);
            userEmitResponse.getAllMessage();
            // userEmitResponse.getMessage(newMessage._id.toString());
        } else {
            const successResponse: typ.GeneralResponse = {
                message: "Message Delete failed",
              };
        
              response(successResponse);
            // response(`Message Not Insert: "${request}"`);
        }
    } catch (error) {
       
    }
};

export const editMessage = async (request: typ.GeneralResponse, response: (response: typ.GeneralResponse) => void): Promise<void> => {
    try {
        const updateMessage = await coll._Chat().findByIdAndUpdate(request.id,{[FieldName.Message]:request.message});
        if (updateMessage) {
            const successResponse: typ.GeneralResponse = {
                message: "Message Update successfully",
              };
        
              response(successResponse);
            // response(`Message Insert Successfully: "${request}"`);
            userEmitResponse.getAllMessage();
            // userEmitResponse.getMessage(newMessage._id.toString());
        } else {
            const successResponse: typ.GeneralResponse = {
                message: "Message Update failed",
              };
        
              response(successResponse);
            // response(`Message Not Insert: "${request}"`);
        }
    } catch (error) {
       
    }
};


