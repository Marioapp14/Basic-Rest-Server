const express = require("express");
const cors = require("cors");

class Server {
  
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usuariosRoutes = "/api/usuarios";

    // Middlewares
    this.middlewares();
    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    //Cors

    /**
     * es una excelente opción para proteger tu servidor REST en Node.js contra
     *  ataques de Cross-Site Scripting (XSS) y Cross-Site Request Forgery (CSRF).
     *  El middleware cors permite configurar y aplicar políticas de seguridad en las cabeceras HTTP
     *  relacionadas con el control de acceso a recursos en un dominio diferente al del servidor.
     */

    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());
    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosRoutes, require("../routes/user.routes"));
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
