import { User, UserModel } from "../model/user.model";

export async function createUser(
    user: User
) {
    try {
        const userDocument = await UserModel.create(user);
        console.log("{UserService | UserService created User successfully!");
        
        return userDocument;
    } catch(e) {
        console.error(e);
        throw e;
    }
}

export async function getUser(
    id: String
) {
    try {
        const user = await UserModel.findById(id);
        if (!user) {
            throw new Error(`Could not find user with id ${id}`);
        }

        return user;
    } catch (e) {
        console.error(`{User Service | Get User} - Error getting User with id ${id}`);
        throw e;
    }
}