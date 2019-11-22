import mongoose from 'mongoose';

class Database {
    private DB_URI = 'mongodb://mongodb:27017';

    private DB_CONNECTION: any;

    constructor() { }

    createConnection() {

        mongoose.connect(this.DB_URI, {
          user: 'root',
          pass: 'MongoDB2019!',
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
