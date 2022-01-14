import express, { Application } from 'express';
import bodyParser from 'body-parser';
import routes from '../Routes';
import dbConnection from './DBConnection';
bodyParser

class Server {
    private app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.setupRoutes()
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
    }

    private async dbConnect() {
        try {
            const onFullfill = (value: void) => console.log('successfuly connect to database')
            const onReject = (reason: string) => console.log('Failed to connect to database, reason for failure:', reason)
            await dbConnection.authenticate().then(onFullfill, onReject)
        } catch (error) {
            console.error('error in connecting to db', error)
            process.exit()
        }
    }

    private setupRoutes() {
        try {
            this.app.use('/', routes)
        } catch (error) {
            console.error('error in setting up routes', error)
            process.exit()
        }
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                console.log('Webserver started listening on port', port)
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;
