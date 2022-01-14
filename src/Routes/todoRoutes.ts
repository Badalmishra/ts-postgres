import {Router} from  'express/index';
import TodoController from '../Controllers/todo';

const todoRouter =Router()
const todoController = new TodoController()

/**
 * All top level routes for the application are configured here
 * @eg routes.use('/endpoint', Controller.handler) 
 */
todoRouter.get('/',todoController.get)

export default todoRouter