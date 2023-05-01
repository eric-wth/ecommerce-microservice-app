import * as cont from '../controllers/product_controllers.js';

export const productApi = (app) => {
    app.post('/products', cont.addProduct);

    app.get('/products', cont.getAllProducts);
};