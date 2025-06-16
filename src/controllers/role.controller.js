const { response, request } = require("express");

class RoleController {
    constructor() {
        console.log("Instancia RoleController creada");
    }

    getAll(req, res) {
        return res.status(200).json({
            msj: "get all"
        });
    }

    getOne(req, res) {
        const { id } = req.params;
        return res.status(200).json({
            msj: "get one",
            id
        });
    }

    delete(req, res) { // Corrección de "delected"
        const { id } = req.params;
        return res.status(200).json({
            msj: "deleted",
            id
        });
    }

    update(req, res) { // Corrección de "updated"
        const { id } = req.params;
        const { name } = req.body;
        return res.status(200).json({
            msj: "updated",
            id,
            name
        });
    }

    create(req, res) {
        const { name } = req.body;
        return res.status(200).json({
            msj: "created",
            role: {
                name
            }
        });
    }
}

module.exports = { RoleController };