const { body } = require("express-validator");

class RoleValidator {
    constructor() {}

    ValidateRole = [
        body("name")
            .notEmpty().withMessage("El nombre es requerido")
            .isString().withMessage("El nombre debe ser un texto")
            .trim(),

        body("id")
            .notEmpty().withMessage("El ID es requerido")
            .isInt().withMessage("El ID debe ser un número"),

        body("status")
            .notEmpty().withMessage("El estado es requerido")
            .isInt().withMessage("El estado debe ser un número")
    ];
}

module.exports = { RoleValidator };