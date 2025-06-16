const { Router } = require("express");
const { RoleController } = require("../controllers/role.controller");
const { RoleValidator } = require("../validators/role.validator");
const { ValidarFields } = require("../middleware/validate-fields.middleware");

const router = Router();
const roleController = new RoleController();
const roleValidator = new RoleValidator();

router.get("/", roleController.getAll);
router.get("/:id", roleController.getOne);
router.post("/", roleValidator.ValidateRole, ValidarFields, roleController.create);
router.put("/:id", roleController.update); 
router.delete("/:id", roleController.delete); 

module.exports = router;