import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import DataBase from './config/db';
import { Routes } from './routes/Routes';

class App {

    public app: express.Application;
    private database: DataBase;
    public route: Routes = new Routes();

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
        this.database = new DataBase();
        this.dataBaseConnection();
    }

    dataBaseConnection() {
        this.database.createConnection();
    }

    closeDataBaseConnection(message: String, callback: any) {
        this.database.closeConnection(message, () => callback());
    }

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes() {
        this.route.carRoutes(this.app);
        this.route.parkRoutes(this.app);
    }

}

export default new App();


