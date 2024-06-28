import type {Request, Response} from "express"
import { pick } from "lodash";
import { createUser, getUser } from "../service/user.service";
import { CreateUserInput, GetUsertInput } from "../schema/user.schema";

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>, 
    res: Response
) {
    /**
     * We're expecting the following body:
     * {
     *  UserName: string,
     *  email: string,
     *  password: string,
     * } 
     */
    try {
        const user = await createUser(req.body);
        return res.status(201).json(
            pick(user, "username", "email", "_id")
        );
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

export async function getUserHandler(
    req: Request<GetUsertInput["params"], {}, {}>,
    res: Response
) {
    try {
        const user = await getUser(req.params.id);
        return res.status(200).json(
            pick(user, "username", "email", "_id")
        );
    } catch (e) {
        console.log(e);
        return res.status(400).json({message: "User not found", error: e});
    }
}