import { OrderModel } from '../model/OrderModel.js';
import { CartModel } from '../model/CartModel.js';

export const createOrder = async(req, res) => {
    const { customerId } = req.body;
    const cart = await CartModel.findOne(customerId);
    const cartItems = cart.items

    const newOrder = new OrderModel(
        {
            orderId,
            customerId,
            amount,
            status: 'received',
            items: cartItems
        }
    );

    const savedOrder = await newOrder.save();
    res.json(savedOrder);
};