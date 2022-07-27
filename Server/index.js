const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const routes = require("./routes/formroutes")

const app = express() 
port = 5000;

mongoose.connect("mongodb+srv://bhavya:hMxjgLiGcNSdecyR@cluster0.3j72xnr.mongodb.net/?retryWrites=true&w=majority", ()=>{
    console.log('database connected')
})

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(routes)

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})




