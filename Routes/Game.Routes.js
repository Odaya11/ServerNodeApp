import { Router } from "express";
import GameControllers from "../Controllers/GameControllers.js";
import bodyParser from "body-parser";
const gm=Router()
gm.use(bodyParser.json())
gm.get('/getbyid:id',GameControllers.getById);
gm.get('/getall',GameControllers.getAll);
gm.get('/getbyCategory:cid',GameControllers.getByCategory);
gm.post('/add',GameControllers.add);
gm.get('/getbynameandpass/:name/:price',GameControllers.getByNameAndPass)
gm.put('/update/:id',GameControllers.update);
gm.delete('/delete/:id',GameControllers.delete);
export default gm