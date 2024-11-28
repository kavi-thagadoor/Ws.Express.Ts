import mongoose from 'mongoose';
import { CollectionName } from '../model/collectionName';
import * as schema from '../model/schema';


export const _Chat = () => mongoose.connection.model(CollectionName.Chat, schema.ChatSchema);