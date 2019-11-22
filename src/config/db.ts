import mongoose from 'mongoose';

class Database {

    private user = process.env.USR;
    private pwd = process.env.PASSWORD;

    private DB_URI = 'mongodb://mongodb:27017';

    private DB_CONNECTION: any;

    constructor() { }

    createConnection() {

        mongoose.connect(this.DB_URI, {
          user: this.user,
          pass: this.pwd,
          dbName: 'park',
          authSource: 'admin',
          useNewUrlParser: true,
        });
        

        this.logger(this.DB_URI);
    }

    closeConnection(message: String, callback: any) {
        this.DB_CONNECTION.close(() => {
          console.log('Mongoose foi desconectado pelo: ' + message);
          callback();
        });
      }

    logger(uri: String) {

        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected', () => console.log('Mongoose está conectado ao ' + uri));
        this.DB_CONNECTION.on('error', (error: Error) => console.error.bind(console, "Erro na conexão: " + error));
        this.DB_CONNECTION.on('disconnected', () => console.log("Mongoose está desconectado do " + uri));

    }

}

export default Database;
