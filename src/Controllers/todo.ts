import { RequestHandler } from "express";
import dbConnection from '../Core/DBConnection'
interface Todo {
    id: number,
    body: string,
    status: string
}
class TodoController {
    private todos: Array<Todo> = [];
    constructor() { 
        const fakeTodo: Todo = { id: 1, body: 'to something', status: 'pending' }
        this.todos.push(fakeTodo)
    }
    public get: RequestHandler = async (req, res) => {
        dbConnection.authenticate()
        console.log('get request handler TodoController')
        res.status(200).json(this.todos)
    }
}

export default TodoController