import amqplib from 'amqplib';
import { SubscribeEvent } from '../controllers/cart_controllers.js';

let EXCHANGE_NAME = 'exchange_name';

//create a channel
export const createChannel = async() => {
    try {
        const connection = await amqplib.connect(process.env.MESSAGE_BROKER_URL);
        const channel = await connection.createChannel();
        await channel.assertExchange(EXCHANGE_NAME, 'direct', { durable: true });
        return channel;
    }
    catch (err) {
        throw err;
    }
};


// publish messages
export const publishMessage = async(channel, binding_key, message) => {
    try {
        channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message));
        console.log(`Message has been sent - ${message}`);
    }
    catch (err) {
        throw err;
    };
};


//subscribe messages
export const subscribeMessage = async(channel, binding_key) => {
    const appQueue = await channel.assertQueue('QUEUE_NAME');

    channel.bindQueue(appQueue.queue, EXCHANGE_NAME, binding_key);

    channel.consume(appQueue.queue, (message) => {
        console.log('The message is: ' + message.content);
        SubscribeEvent(message.content);
    },
    { noAck: true }
    );

};