const express = require('express')

const path = require("path")

const app = express()

const HOST = 'localhost'
const PORT = 8000

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./templates"))

app.get('/posts', (req, res) => {
    const context = {
        posts: [ {name: 'post1', author: 'Author1'}, {name: 'post2', author: 'Author2'} ]
    }

    res.render("posts", context)
}) 

function getDate(){
    const moment = require( 'moment' )
    return moment().format( 'YYYY/MM/DD hh:mm:ss' )
}
app.use("/static/", express.static(path.resolve(__dirname, "./static")))

app.get('/', (req, res) => {
    res.render("index")
    // res.sendFile(path.resolve(__dirname, "./templates/index.html"))
}) 

app.get("/date", (req, res) =>{
    // res.send('hello woda')
    res.send(getDate())
})

app.listen(PORT, HOST, ()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})

// module.exports = { resSend };