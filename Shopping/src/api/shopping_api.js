import * as cart from '../controllers/cart_controllers.js';
import * as order from '../controllers/cart_controllers.js';

export const shoppingApi = (app) => {
    //CART API
    app.get('/cart', cart.getCart);


    //ORDER API
    app.post('/order', order.createOrder);
};