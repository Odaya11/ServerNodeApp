import {model, Schema } from "mongoose";

const Category=Schema({
    nameCategory:{
        type:String
    }
})
export default model('Category',Category)