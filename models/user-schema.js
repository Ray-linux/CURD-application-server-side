import mongoose from "mongoose";

import validator from "validator";

import autoIncrement from "mongoose-auto-increment"

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 3
    },
    username : {
        type: String,
        required: true,
        minlength: 3
    },
    email : {
        type: String,
        required: true,
        unique:[true, "Email is already pressent"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        min: 10,
        required: true,
        unique: true
    }
})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user')

const user = new mongoose.model('user', userSchema)   

// module.exports = user;
export default user
