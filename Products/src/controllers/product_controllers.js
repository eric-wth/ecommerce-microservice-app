import { ProductModel } from '../model/ProductModel.js';

export const addProduct = async(req, res) => {
    try{
        const { product_name, price, description } = req.body;

        const newProduct = new ProductModel(
            {
                product_name,
                price,
            }
        );

        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    }
    catch(err) {
        throw err;
    };
};

export const getAllProducts = async(req, res) => {
    try{
        const data = await ProductModel.find();
        res.json(data);
    }
    catch(err) {
        throw err;
    };
};