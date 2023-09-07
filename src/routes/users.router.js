const { Router } = require('express')

const { userModel } = require('../models/user.model')

const router = Router()

router.get("/", async (req, res) => {
    try {
        let users = await userModel.find()
        res.send({ result: "success", payload: users })
    } catch (error) {
        console.log(error);
    }
})

router.post("/", async (req, res) => {
    let { nombre, email } = req.body

    if (!nombre || !email) {
        req.send({ status: "error", error: "Missing params" })
    }
    let id = Math.floor(Math.random() * 10) * Date.now()
    let result = await userModel.create({ nombre, email, id })
    res.send({ result: "success", payload: result })
})

router.put("/:uid", async (req, res) => {
    let { uid } = req.params

    let userToReplace = req.body

    if (!userToReplace.nombre || !userToReplace.email) {
        res.send({ status: "error", error: "Faltan parámetros" })
    }

    let result = await userModel.updateOne({ id: uid }, userToReplace)
    res.send({ result: "success", payload: result })
})

router.delete("/:uid", async (req, res) => {
    let { uid } = req.params
    let result = await userModel.deleteOne({ id: uid })
    let usuarios = await userModel.find()
    res.send({ result: "success", payload: result })

})

module.exports = router