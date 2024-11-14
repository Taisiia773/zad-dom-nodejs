import express, {Express, Request, Response} from 'express'
import postService from './postService'

function getPostById (req: Request, res : Response) {
    
    const id = +req.params.id
    const context = postService.getPostById(id)
    res.render('post', context)
}
async function getAllPosts (req: Request, res : Response) {
    const max = req.query.max === undefined ? 1 : +req.query.max
    const context = await postService.getAllPosts(max)
    res.render("posts", context)
}

function createPost(req: Request, res : Response) {
    console.log(req.body);
    const post = req.body
    const msg = postService.createPost(post)
    res.send(msg)
}
const postController= {
    getPostById: getPostById, 
    getAllPosts: getAllPosts,
    createPost: createPost 
}
export default postController