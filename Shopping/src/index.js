import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { shoppingApi } from './api/shopping_api.js';
import { createChannel } from './utils/pubSub.js';

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
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB connected');
        //getCollection('cartmodels').dropIndexes()
    })
    .catch((err) => {
        console.log(`DB not connected - ${err}`);
    }); 
    
    //MESSAGE BROKER CHANNEL
    const channel = await createChannel();

    
    
    //API
    shoppingApi(app, channel);

};
startServer();