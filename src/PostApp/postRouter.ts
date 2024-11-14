import express from "express"
import postController from "./postController"
// import { authMiddleware } from "../middlewares/authMiddleware"


const router = express.Router()

// router.use(authMiddleware)

// Запрос от клиента -> middleware,  -> handler(next)

router.get("/all", postController.getAllPosts)
router.post("/create", postController.createPost)
router.get("/:id", postController.getPostById)

export default router
