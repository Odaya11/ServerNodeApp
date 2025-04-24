import mongoose, { model, Schema } from "mongoose";


const Buy=Schema({
    code_client:{
        type:mongoose.Types.ObjectId,
        ref:'Client'
    },
    dateOfBuy:Date,
  all:Array


})
export default model('Buy',Buy)