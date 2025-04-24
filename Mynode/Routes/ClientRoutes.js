import { Router } from "express"
import bodyParser from "body-parser"
import ClientControllers from "../Controllers/ClientControllers.js"
const cl=Router()
cl.use(bodyParser.json())
cl.post('/add',ClientControllers.add);
cl.get('/isExsist/:name/:password',ClientControllers.isExsist)
export default cl