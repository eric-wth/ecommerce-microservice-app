import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { userApi } from './api/user_api';

dotenv.config();

const app = express();


//CONFIGURATIONS
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));


//SERVER
const startServer = async() => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });


    //DB CONNECTION
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => {
        console.log(`DB not connected = ${err}`);
    });


    //API
    userApi(app);


};
startServer();