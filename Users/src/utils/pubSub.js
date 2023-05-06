import amqplib from 'amqplib';

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


// publish messages /
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
    await channel.assertExchange(EXCHANGE_NAME, 'direct', { durable: true });

    const appQueue = await channel.assertQueue('PRODUCT_QUEUE');

    channel.bindQueue(appQueue.queue, EXCHANGE_NAME, binding_key);

    channel.consume(appQueue.queue, (data) => {
        console.log('data received');
        console.log(data.content.toString())
        channel.ack(data);
    })


};