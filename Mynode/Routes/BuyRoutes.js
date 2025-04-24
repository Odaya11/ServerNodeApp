import bodyParser from "body-parser";
import { Router } from "express";
import BuyControllers from "../Controllers/BuyControllers.js";

const by=Router()
by.use(bodyParser.json())
by.get('/getByCode/:code',BuyControllers.getByCode)
by.post('/savebuy',BuyControllers.savebuy)
export default by