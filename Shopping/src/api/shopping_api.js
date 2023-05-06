import * as cart from '../controllers/cart_controllers.js';
import { subscribeMessage } from '../utils/pubSub.js';

export const shoppingApi = (app, channel) => {
    subscribeMessage(channel, 'SHOPPING_SERVICE');



    app.get('/cart', cart.getCart);

    app.post('/cart', cart.addToCart);




};