import { Router } from "express"
import todoRouter from "./todoRoutes"

const routes = Router()
/**
 * All top level routes for the application are configured here
 * @eg routes.use('/endpoint', router) 
 */
routes.get('/',(req,res)=>{res.send('test')})
routes.use('/todo',todoRouter)

export default  routes