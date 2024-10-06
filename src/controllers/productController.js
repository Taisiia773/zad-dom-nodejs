const productService = require('../services/productService')

function getProductById (req, res) {
    const id = req.params.id
    console.log(id)
    const context = productService.getProductById(id)
    res.render('post', context)
}
function getAllProducts (req, res) {
    console.log(req.query)
    const context = productService.getAllProducts(req.query.max)
    res.render("posts", context)
}

function createProduct(req,res) {
    console.log(req.body);
    const post = req.body
    const msg = productService.createProduct(post)
    res.send(msg)
}
module.exports = {
    getProductById: getProductById, 
    getAllProducts: getAllProducts,
    createProduct: createProduct 
}