const { Router } = require('express')

const { prodModel } = require('../models/products.model')

const router = Router()

router.get("/", async (req, res) => {
    try {
        let products = await prodModel.find()
        res.send({ result: "success", payload: products })
    } catch (error) {
        console.log(error);
    }
})

router.post("/", async (req, res) => {
    let { nombre, categoria, precio, stock, imagen } = req.body

    if (!nombre || !categoria || !precio || !stock || !imagen) {
        req.send({ status: "error", error: "Missing params" })
    }
    let id = Math.floor(Math.random() * 10) * Date.now()
    let result = await userModel.create({ nombre, categoria, precio, stock, imagen, id })
    res.send({ result: "success", payload: result })
})

router.put("/:pid", async (req, res) => {
    let { pid } = req.params

    let prodToReplace = req.body

    if (!prodToReplace.nombre || !prodToReplace.categoria || !prodToReplace.precio || !prodToReplace.stock || !prodToReplace.imagen) {
        res.send({ status: "error", error: "Faltan parámetros" })
    }

    let result = await prodModel.updateOne({ id: pid }, prodToReplace)
    res.send({ result: "success", payload: result })
})

router.delete("/:pid", async (req, res) => {
    let { pid } = req.params
    let result = await prodModel.deleteOne({ id: pid })
    let products = await prodModel.find()
    res.send({ result: "success", payload: result })

})

module.exports = router