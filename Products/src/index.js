import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { productApi } from './api/product_api.js';

dotenv.config();

const app = express();

//CONFIGURATIONS
app.use(express.json({ extended: true }));
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));



//SERVER
const startServer = async() => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => {

        console.log(`Server running on port ${PORT}`);
    });


    //DB CONNNECTION
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => {
        console.log(`DB not connected - ${err}`);
    });


    //API
    productApi(app);

};
startServer();