import bookControllers from "../controller/book.controllers.js";
import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { validate } from '../middlewares/validation.middlewares.js'
import { bookSchema } from "../schema/book.schema.js";

const router = Router()

router.get("/books", bookControllers.findAllBooksController)


router.post("/books", validate(bookSchema),authMiddleware,bookControllers.createBookController)

export default router
