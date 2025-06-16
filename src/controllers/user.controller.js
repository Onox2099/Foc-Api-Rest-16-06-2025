const { response, request } = require("express");

class UserController {
    constructor() {
        console.log("Instancia UserController creada");
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

    delete(req, res) { 
        const { id } = req.params;
        const { name, email, password, role_id, status } = req.body;

        return res.status(200).json({
            msj: "deleted",
            id,
            name,
            email,
            password,
            role_id,
            status
        });
    }

    update(req, res) {
        const { id } = req.params;
        const { name, email, password, role_id, status } = req.body;

        return res.status(200).json({
            msj: "updated",
            user: {
                id,
                name,
                email,
                password,
                role_id,
                status
            }
        });
    }

    create(req, res) {
        const { name, email, password, role_id, status } = req.body;

        return res.status(200).json({
            msj: "created",
            user: { 
                name,
                email,
                password,
                role_id,
                status
            }
        });
    }
}

module.exports = { UserController };