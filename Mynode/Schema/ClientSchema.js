import { model, Schema } from "mongoose";


const Client=Schema({
    name:String,
    password:String,
    numOfCard:String,
    cvv:String,
    expiration:String
    

    
})
export default model('Client',Client)