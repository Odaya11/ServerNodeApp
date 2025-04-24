import mongoose, { model,Schema } from "mongoose";

const Game=Schema({
    name:String,
    price:Number,
     pic:String, 
     age:Number,
    code_Category:{
        type:mongoose.Types.ObjectId,
        ref:'Category'
    },
    amount:Number
   
})
export default model('Game',Game)