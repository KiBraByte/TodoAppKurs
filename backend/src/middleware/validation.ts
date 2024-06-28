import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export function validate(schema: AnyZodObject) {
    return function(
        req: Request, 
        res: Response,
        next: NextFunction
    ) {

        const validated = schema.safeParse({ 
            params: req.params,
            body: req.body 
        });

        if (validated.success) {
            Object.assign(req, validated.data);
            return next();
        } else {
            return res.status(400).send("Malformed Request!")
        }
    }
}