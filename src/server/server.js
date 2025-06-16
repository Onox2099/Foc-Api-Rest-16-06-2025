const express = require("express");
const cors = require("cors");
const path = require("path");

class Server {
    constructor() {
        console.log("Instancia del servidor creada");
        this.app = express();
        this.port = process.env.API_PORT || 3500;
        this.pre = "/api";

        this.paths = {
            role: `${this.pre}/role`,
            user: `${this.pre}/user`,
        };

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.resolve(__dirname, "public"))); // Uso de path.resolve()
    }

    routes() {
        try {
            this.app.use(this.paths.role, require("../routes/role.route"));
            this.app.use(this.paths.user, require("../routes/role.user"));
        } catch (error) {
            console.error("Error cargando rutas:", error.message);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en http://localhost:${this.port}`);
        }).on("error", (err) => {
            console.error("Error al iniciar el servidor:", err.message);
        });
    }
}

module.exports = { Server };