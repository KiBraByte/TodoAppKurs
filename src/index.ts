import envUtil from './util/env.util';
import express from 'express';
import router from  './routes';

const {PORT} = envUtil;

const app = express();

app.use(express.json());
app.use("/", router);

app.listen(PORT,() => {
    console.log(`Server started on Port ${PORT}!`);
});
