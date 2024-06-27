import envUtil from './util/env.util';
import express from 'express';
import router from  './routes';
import cors from 'cors'

const {PORT} = envUtil;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT,() => {
    console.log(`Server started on Port ${PORT}!`);
});
