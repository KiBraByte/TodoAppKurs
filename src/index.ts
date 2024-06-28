import envUtil from './util/env.util';
import express from 'express';
import router from  './routes';
import cors from 'cors'
import mongoose from 'mongoose';

const {PORT, MONGO_URL} = envUtil;


const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(PORT, async () => {
    await mongoose.connect(MONGO_URL);
    console.log(`Server started on Port ${PORT}!`);
});
