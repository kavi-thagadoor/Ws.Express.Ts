import mongoose, { Document, Schema } from 'mongoose';

// Interface for TypeScript type-checking
interface IUser extends Document {
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, {
  timestamps: true, // This automatically creates `createdAt` and `updatedAt` fields
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
