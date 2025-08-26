import { Router } from "express";
import userControllers from "../controller/user.controllers.js";
import { validate, validateUserId } from "../middlewares/validation.middlewares.js";
import { userSchema } from "../schema/user.schema.js";

const router = Router()

router.post('/users', validate(userSchema),  userControllers.createUseController)

router.get('/users', userControllers.findAllUserByIdController)
router.get("/users/:id", validateUserId, userControllers.findAllUserByIdController)
router.put("/users/:id", validateUserId, validate(userSchema), userControllers.updateUserController)
router.delete("/users/:id",validateUserId, userControllers.deleteUserController)

export default router
