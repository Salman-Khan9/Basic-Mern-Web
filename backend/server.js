const express = require ("express")
const mongoose = require("mongoose")
const router = require("./routes")
const dotenv = require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)
app.get("/",(req,res)=>{
    res.send("home page")



})
const port = process.env.port || 5000
mongoose.connect(process.env.MONGO).then(()=>{
    try {
        app.listen(port,()=>{

            console.log(`app is running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
})

