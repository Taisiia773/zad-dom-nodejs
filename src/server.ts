import express, { Express, Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";

import productRouter from "./ProductApp/productRouter"
import userRouter from "./UserApp/userRouter";

const SECRET_KEY = "vovsemvinovataluda"

const HOST = 'localhost'
const PORT = 8000

// const productRouter = require("./routers/productRouter")

// const app = express()
const app: Express = express()
// const path = path()

app.use(express.json())

app.use(cookieParser())



// устанавливаем шаблонизатор с помощью которого будут рендериться шаблоны (при res.render)
app.set("view engine", "ejs")
// устанавливаем местонахождение шаблонов для шаблонизатора (вместо дефолтного views)
app.set("views", path.resolve(__dirname, "./templates"))

// app.get('/posts', (req, res) => {
//     const context = {
//         posts: [ {name: 'post1', author: 'Author1'}, {name: 'post2', author: 'Author2'} ]
//     }

//     res.render("posts", context)
// }) 

function getDate(){
    const moment = require( 'moment' )
    return moment().format( 'YYYY/MM/DD hh:mm:ss' )
}

// Настраиваем раздачу статических файлов по пути /static/,
// указывая директорию в которой лежат статик файлы (public)
app.use("/static/", express.static(path.resolve(__dirname, "./static")))

app.use("/post/", productRouter)
// app.use("/", userRouter)

app.get("/", (req: Request ,res: Response) => {
    res.render("index")
})


app.get("/date", (req: Request ,res: Response) =>{
    res.send(getDate())
})

app.listen(PORT, HOST, ()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})