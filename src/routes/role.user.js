const { Router } = require("express");
const { UserController } = require("../controllers/user.controller");
const { UserValidator } = require("../validators/user.validator");
const { ValidarFields } = require("../middleware/validate-fields.middleware");

const router = Router();
const userController = new UserController();
const userValidator = new UserValidator();

router.get("/", userController.getAll);
router.get("/:id/:role_id/:status", userController.getOne); 
router.post("/", userValidator.ValidateUser, ValidarFields, userController.create);
router.put("/:id/:role_id/:status", userController.update); 
router.delete("/:id/:role_id/:status", userController.delete);

module.exports = router;