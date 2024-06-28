import {Schema, Document, model, ObjectId} from  "mongoose";
export type User = {
    username: String,
    email: String,
    password: String,
}

export type UserDocument = Document<ObjectId> & User;

export const UserSchema = new Schema<UserDocument>({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
}, {
    timestamps: true
});

export const UserModel = model<UserDocument>("User", UserSchema);