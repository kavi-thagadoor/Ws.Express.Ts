import mongoose from "mongoose";
import { FieldName } from "./collectionName";

export const ChatSchema = new mongoose.Schema({   
    [FieldName.Message]: { type: String, required: true, alias: "Message" },
    [FieldName.CreatedOn]: { type: Date, required: false, alias: "CreatedOn" },
    [FieldName.IsActive]: { type: Number, required: false, alias: "IsActive" }
});
