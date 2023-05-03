import { CartModel } from '../model/CartModel.js';

//Get all the items in a cart
export const getCart = async(req, res) => {
    try{
        const { userId } = req.body;
        const data = await CartModel.findOne({ userId: userId });
        res.json(data.items);
    }
    catch(err) {
        throw err;
    };
};



//Adds items to a cart
export const addToCart = async(req, res) => {
    try{
        const { userId, items } = req.body;
        const [ productId, quantity, price, total ] = items;
        let cart = await CartModel.findOne({ userId: userId });

        //Adds items to cart if cart exists
        if(cart) {
            cart.items.push(
                {
                    productId,
                    quantity,
                    price,
                    total
                }
            );

            const result = await cart.save();
            res.json(result);
        }
        //Creates a cart if it doesn't exist and adds items
        else {
            const newCart = new CartModel(
                {
                    userId,
                    items
                }
            );
    
            const result = await newCart.save();
            res.json(result);

        };

    }
    catch(err) {
        throw err;
    };
};



//Removes items from a cart
export const removeCartItem = async(req, res) => {
    try{
        const { userId, productId } = req.body;
        let cart = await CartModel.findOne({ userId: userId });
        const indexFound = cart.items.findIndex(item => item.productId === productId);

        if(indexFound) {
            cart.items.splice(indexFound, 1);
        }

        res.json(cart);
    }
    catch(err) {
        throw err;
    };
};