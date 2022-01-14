import { RequestHandler } from "express";
interface Todo {
    id:string,
    body:string,
    status:string
}
class TodoController {
    private todo:Array<Todo> =[];
    public  get:RequestHandler = async (req,res)=> {
        console.log('get request handler TodoController')
        res.json(this.todo)
    }
}

export default TodoController