import { ProductModel } from '../model/ProductModel.js';

export const addProduct = async(req, res) => {
    const { product_name, price, description } = req.body;

    const newProduct = new ProductModel(
        {
            product_name,
            price,
        }
    );

    const savedProduct = await newProduct.save();
    res.json(savedProduct);
};

export const getAllProducts = async(req, res) => {
    const data = await ProductModel.find();
    res.json(data);
};