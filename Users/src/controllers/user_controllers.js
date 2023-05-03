import { UserModel } from '../model/UserModel.js';

export const register = async(req, res) => {
    try{
        const { name, email, password } = req.body;

        const newUser = new UserModel(
            {
                name,
                email,
                password
            }
    );

        const savedUser = await newUser.save();
        res.json(savedUser);
    }
    catch(err) {
        throw err;
    };    
};


export const getAllUsers = async(req, res) => {
    try{
        const data = await UserModel.find();
        res.json(data);
    }
    catch(err) {
        throw err;
    };
};