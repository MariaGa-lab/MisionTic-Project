const { Router } = require('express');
const router = Router();
const UserSchema = require('../models/user');
const { validationResult } = require('express-validator');
const verifyToken = require('../middlewares/verifyToken');

// GET Todos los usuarios
router.get('/', async (req, res) => {
    try {
        const users = await UserSchema.find();
        res.status(200).json({ data: users });
    }
    catch (err) {
        res.status(400).json({status: "Problemas con la base de datos" + err.message})
    }
});

// GET Usuario por ID
router.get('/:id', async (req, res) => {
    try {   
        const user = await UserSchema.findById(req.params.id);
        res.status(200).json({ data: user });
    }
    catch (err) {
        res.status(400).json({status: "Usuario no encontrado" + err.message})
    }
});

// POST Crear nuevo usuario
router.post('/', async (req, res) => {
    const isEmailExist = await UserSchema.findOne({ email: req.body.email});
    if(isEmailExist){
        res.status(400).json({status: 'El usuario ya se encuentra registrado'})
    }
    let newUser = req.body
    let user = new UserSchema(newUser);
    try {
        await user.save();
        res.status(201).json({ data: user });
    }
    catch (err) {
        res.status(400).json({status: "Problemas con la base de datos" + err.message})
    }
});

// PUT Actualizar usuario por ID
router.put('/:id', async (req, res) => {
    try {
        const newUser = {
            id: req.params.id,
            fullName: req.body.fullName,
            email: req.body.email,
            role: req.body.role,
            state: req.body.state
        }
        await UserSchema.findByIdAndUpdate(req.params.id, newUser);
        res.status(201).json({ data: newUser })
    }
    catch (err) {
        res.status(400).json({status: "Problemas con la base de datos" + err.message})
    }
});

// DELETE Borrar usuario por ID
router.delete('/:id', async (req, res) => {
    try {
        const result = await UserSchema.findByIdAndRemove(req.params.id);
        res.status(200).json({ data: result });
    }
    catch (err) {
        res.status(400).json({status: "Usuario no encontrado" + err.message})
    }
});

module.exports = router;