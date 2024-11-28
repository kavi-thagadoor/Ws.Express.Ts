import moment from "moment";
import * as typ from "../../utils/types";
import * as userEmitResponse from "../userManagement/userResponseManagement";
import * as IntCol from "../../model/collectionAlias";
import * as coll from '../../model/coll';

export const addMessage = async (request: any, response: (response: string) => void): Promise<void> => {
    try {
        console.log("Message received:", request);

        const contentInt = {
            Message: request,
            CreatedOn: moment.utc().toDate(),
            IsActive: 1
        } as IntCol.Chat;

        const newMessage = await coll._Chat().create(contentInt);
        if (newMessage) {
            response(`Message Insert Successfully: "${request}"`);
            userEmitResponse.getMessage(newMessage._id.toString());
        } else {
            response(`Message Not Insert: "${request}"`);
        }        
        // setTimeout(() => {           
        //     if (typeof response === "function") {
        //         response(`Server successfully processed your message: "${request}"`);
        //     }                 
        // }, 1); 
    } catch (error) {
        console.error("Error processing message:", error);
        if (typeof response === "function") {
            response("An error occurred while processing your message.");
        }
    }
};
