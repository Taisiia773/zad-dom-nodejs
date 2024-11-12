import express from "express"
import productControllers from "./productController"
// import { authMiddleware } from "../middlewares/authMiddleware"


const router = express.Router()

// router.use(authMiddleware)

// Запрос от клиента -> middleware,  -> handler(next)

router.get("/all", productControllers.getAllProducts)
router.post("/create", productControllers.createProduct)
router.get("/:id", productControllers.getProductById)

export default router
