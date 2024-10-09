const express = require("express")

const {connectMongoDb} = require("./connection")
const {logReqRes} = require('./middleware')
const userRouter =require("./routes/user")

const app = express()
const PORT = 4000

// connection 
connectMongoDb("mongodb+srv://minakshidutta21:NDNfQ2LbZ4tEVb1n@cluster0.sxwqi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

//Middleware -plugin
app.use(express.urlencoded({ extended: true })) 
app.use(logReqRes("./log.txt"))

//Routes
app.use("/api/user",userRouter)

app.listen(PORT, (req, res) => {
    console.log(`Server started at ${PORT}`)
})