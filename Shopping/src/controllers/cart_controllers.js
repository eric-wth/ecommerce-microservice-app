import { CartModel } from '../model/CartModel.js';

export const getCart = async(req, res) => {
    const { _id } = req.body;
    const data = await CartModel.findOne(_id);
    res.json(data);
}