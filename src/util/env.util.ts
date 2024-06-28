import { object, string, number, coerce } from "zod";
import dotenv from 'dotenv';

dotenv.config();

const envSchema = object({
    /*PORT: string({
        message: "PORT must be a number!"
    }).transform(e => {
        try {
            //console.log(isNaN(+portStr));
            const port =  parseInt(e);

            if (port < 1 || port > 65535) {
                throw "PORT not in valid range";
            }
            
            return port;
        } catch (err) {
            console.log(err);
        }
    }), */
    PORT: coerce.number({
        message: "Invalid Port!",
    }).min(0).max(65535),
    MONGO_URL: string({message: "Mongo URL required!"}).url({message: "Invalid Mongo URL!"})
});

export default envSchema.parse(process.env);