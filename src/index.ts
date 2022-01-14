import Server from './Core/server';

const port:number = 4040;
const server:Server = new Server();

server.start(port)
    