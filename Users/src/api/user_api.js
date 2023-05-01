import * as cont from './/controllers/user_controllers.js';

export const userApi = (app) => {
    app.post('/register', cont.register);

    app.get('./users', cont.getAllUsers);

    
};