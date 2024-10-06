const express = require('express')
const path = require("path")

const HOST = 'localhost'
const PORT = 8000

const productRouter = require("./routers/productRouter")

const app = express()

app.use(express.json())

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

// app.get('/post/:id', (req, res) => {
//     const id = req.params.id
//     console.log(id)
//     const context = {
//         post:posts[id-1],
//     }

//     res.render('post', context);
    
// })

// app.post("/post/create", (req, res) => {
//     console.log(req.body);
//     const post = req.body;
//     posts.push({
//         name: post.name,
//         description: post.description,
//         time_publicated: post.time_publicated,
//         author: post.author
//     });

//     res.send("Post created successfully");
// });



app.get('/', (req, res) => {
    res.render("index")
}) 

app.get("/date", (req, res) =>{
    res.send(getDate())
})

app.listen(PORT, HOST, ()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})