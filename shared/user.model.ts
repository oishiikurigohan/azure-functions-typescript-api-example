import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string,
    age: number,
    gender: string
}

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        default: 0
    },
    gender: {
		type: String
    }
}, { collection: 'user' });

export default mongoose.model<IUser>('user', UserSchema);
