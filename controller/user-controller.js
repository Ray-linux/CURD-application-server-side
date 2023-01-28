
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

export const getUser = async (req, res) => {
    try{
        const user = await User.find({_id : req.params.id});
        res.status(200).json(user);
    }catch(e){
        res.status(404).json({message: e.message})
    }
}

export const editUser = async (req, res) => {
    const user = req.body;
    const editUser = new User(user);

    try{
        await User.updateOne({_id: req.params.id}, editUser);
        res.status(201).json(editUser)
    }catch(e){
        res.status(409).json({message: e.message})
    }
}

export const deleteUser = async(req, res) => {
    try {
        await User.deleteOne({_id: req.params.id});
        res.status(200).json({message: 'User deleted successfully'})
    } catch (e) {
        res.status(409).json({message: e.message})
    }
}