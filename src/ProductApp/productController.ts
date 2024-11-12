// const productService = require('../services/productService')
import express, {Express, Request, Response} from 'express'
import productService from './productService'

// function getProductByIdController (req: Request, res: Response) {
//     const id = +req.params.id
//     console.log(id)
//     const context = getProductById(id)
//     res.render('post', context)
// }
// function getAllProductsController (req: Request, res: Response) {
//     console.log(req.query)
//     const max = req.query.max === undefined ? 1 : +req.query.max
//     const context = getAllProducts(max)
//     res.render("posts", context)
// }

// function createProductController(req: Request, res: Response) {
//     console.log(req.body);
//     const post = req.body
//     const msg = createProduct(post)
//     res.send(msg)
// }

// export{getProductByIdController, getAllProductsController, createProductController};


function getProductById (req: Request, res : Response) {
    
    const id = +req.params.id
    const context = productService.getProductById(id)
    res.render('post', context)
}
async function getAllProducts (req: Request, res : Response) {
    const max = req.query.max === undefined ? 1 : +req.query.max
    const context = await productService.getAllProducts(max)
    res.render("postы", context)
}

function createProduct(req: Request, res : Response) {
    console.log(req.body);
    const post = req.body
    const msg = productService.createProduct(post)
    res.send(msg)
}
const productController= {
    getProductById: getProductById, 
    getAllProducts: getAllProducts,
    createProduct: createProduct 
}
export default productController