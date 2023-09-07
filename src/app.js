const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users.router')
const productsRouter = require('./routes/products.router')
const app = express()
const PORT = 8080

app.listen(PORT, () => {
    console.log(`Listenning on port: ${PORT}`);
})

app.use(express.json())

//Connection to MongoDB

mongoose.connect('mongodb+srv://luisfdlta:Mejorsolo1095@cluster0.aauduvj.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connected to DB - Mongo atlas");
    })
    .catch(error => {
        console.error("Connection error", error)
    })


app.use("/api/users", usersRouter)
app.use("/api/products", productsRouter)
