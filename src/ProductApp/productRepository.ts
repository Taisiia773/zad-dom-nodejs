import { client } from "../client/prismaClient"
import { Prisma } from "@prisma/client"



async function getProductById(id: number){
    const post = await client.post.findUnique({
        where: {
            id: id
        }
    })
    return post
}



async function getAllProducts(max?: number){
    try {
        const posts = await client.post.findMany()
        return posts
    }catch (err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code === "P2002"){
                console.log(err.message)
                throw err
            }else if ( err.code === "P2003"){

            }
        }
    }
}



async function createProduct(data: Prisma.PostCreateInput){
    const posts = await client.post.create({
        data: data
    })
    return posts
} 





const productRepository = {
    getProductById, 
    getAllProducts,
    createProduct 
}

export default productRepository