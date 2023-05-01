import { UserModel } from '../model/UserModel.js';

export const register = async(req, res) => {
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
};


export const getAllUsers = async(req, res) => {
    const data = await UserModel.find();
    res.json(data);
};