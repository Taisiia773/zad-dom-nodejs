const express = require('express')

const path = require("path")

const app = express()

const HOST = 'localhost'
const PORT = 8000


function getDate(){
    const moment = require( 'moment' )
    return moment().format( 'YYYY/MM/DD hh:mm:ss' )
}
app.use("/static/", express.static(path.resolve(__dirname, "./static")))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./templates/index.html"))
}) 

app.get("/date", (req, res) =>{
    // res.send('hello woda')
    res.send(getDate())
})

app.listen(PORT, HOST, ()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})

// module.exports = { resSend };