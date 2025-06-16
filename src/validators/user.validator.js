const { body } = require('express-validator');

class UserValidator {
    constructor() {}

    ValidateUser = [
        body("name")
            .notEmpty().withMessage("El nombre es requerido")
            .isString().withMessage("El nombre debe ser un texto")
            .trim(),

        body("email")
            .notEmpty().withMessage("El correo electrónico es requerido")
            .isEmail().withMessage("Formato de correo inválido, usa algo como: usuario@gmail.com")
            .normalizeEmail(),

        body("password")
            .notEmpty().withMessage("La contraseña es requerida")
            .isStrongPassword({ minLength: 8, minNumbers: 1, minSymbols: 1 })
            .withMessage("Clave inválida, debe tener al menos 8 caracteres, incluyendo letras, números y símbolos"),

        body("role_id")
            .notEmpty().withMessage("El ID de rol es requerido")
            .isInt({ min: 1 }).withMessage("El role_id debe ser un número entero positivo"),

        body("status")
            .notEmpty().withMessage("El estado es requerido")
            .isInt({ min: 0, max: 1 }).withMessage("El status debe ser 0 (inactivo) o 1 (activo)")
    ];
}

module.exports = { UserValidator };