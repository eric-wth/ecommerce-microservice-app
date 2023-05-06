import * as cont from '../controllers/user_controllers.js';
import { publishMessage } from '../utils/pubSub.js';

export const userApi = (app) => {
    app.post('/register', cont.register);    

    app.get('./users', cont.getAllUsers);

    app.post('/wishlist', async(req, res) => {
        publishMessage(channel, 'SHOPPING_SERVICE', 'Some message from publisher');
    });
    
    

};