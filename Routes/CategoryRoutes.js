import { Router } from "express";
import CategoryControllers from "../Controllers/CategoryControllers.js";
import bodyParser from "body-parser";
const Cr=Router()
Cr.use(bodyParser.json())
Cr.get('/getall',CategoryControllers.getAll);
Cr.post('/add',CategoryControllers.add);
Cr.put('/update/:id',CategoryControllers.update);
Cr.delete('/delete/:id',CategoryControllers.delete)
export default Cr