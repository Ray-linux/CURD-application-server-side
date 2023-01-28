
import User from "../models/user-schema.js";

export const addUser = async (req, res) => {
    const user = req.body;

    const newUser  = new User(user);

    try {
        await newUser.save();
        res.status(201).json(newUser)
    } catch (e) {
        res.status(409).json({message : e.message});
    }
    
}


export const getUsers = async(req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch(e){
        res.status(404).json({message: e.message})
    }
}