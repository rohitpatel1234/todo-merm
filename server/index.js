const express = require("express")
const dotenv = require("dotenv")
const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000 

app.use(express.json())

app.get("/",(req,res)=>{
    res.json({msg:"Hello World"})
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})