const mongoose = require('mongoose')

const prodCollection = "productos"

const prodSchema = new mongoose.Schema({
    nombre: { type: String, required: true, max: 100 },
    categoria: { type: String, required: true, max: 100 },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    imagen: { type: String, required: true, max: 200 },
    id: { type: Number }
})

const prodModel = mongoose.model(prodCollection, prodSchema)