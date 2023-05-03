import * as cart from '../controllers/cart_controllers.js';
import * as order from '../controllers/cart_controllers.js';

export const shoppingApi = (app) => {
    //CART API
    app.get('/cart', cart.getCart);

    app.post('/cart', cart.addToCart);








    //ORDER API
    //app.post('/order', order.createOrder);
};