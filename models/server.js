const express = require('express');
const cors = require('cors');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8081;
        this.users_path = '/api/users';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio de mi aplicacion
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.users_path, require('../routes/users'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Puerto ${this.port}`);
        });
    }

}


module.exports = Server;