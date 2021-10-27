const UserSchema = require('../models/user');
const { validationResult } = require('express-validator');

const getUser = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let user = await UserSchema.findById(req.params.id);
            return res.status(200).json({ data: user });
        }
        catch (err) {
            return res.status(404).json({
                error: {
                    code: 404,
                    message: "Usuario no encontrado"
                }
            })
        }
    } else {
        return res.status(404).json({
            error: {
                code: 404,
                message: "ID no encontrado"
            }
        })
    }
}

const getUsers = async (req, res) => {
    try {
        let users = await UserSchema.find();
        return res.status(200).json({ data: users });
    }
    catch (err) {
        return res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    let isEmailExist = await UserSchema.findOne({ email: req.body.email});
    if(isEmailExist){
        return res.status(400).json({
            error: {
                code: 400,
                message: "El usuario ya se encuentra registrado"
            }
        })
    }

    let newUser = req.body
    let user = new UserSchema(newUser);
    try {
        await user.save();
        return res.status(201).json({ data: user });
    }
    catch (err) {
        return res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const updateUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    try {
        let newUser = {
            id: req.params.id,
            fullName: req.body.fullName,
            email: req.body.email,
            role: req.body.role,
            state: req.body.state
        }
        await UserSchema.findByIdAndUpdate(req.params.id, newUser);
        return res.status(201).json({ data: newUser })
    }
    catch (err) {
        return res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}


const deleteUser = async (req, res) => {
    if (req.params.id != 'undefined') {
        try {
            let result = await UserSchema.findByIdAndRemove(req.params.id);
            return res.status(200).json({ data: result });
        }
        catch (err) {
            return res.status(404).json({
                error: {
                    code: 404,
                    message: "Usuario no encontrado"
                }
            })
        }
    } else {
        return res.status(404).json({
            error: {
                code: 404,
                message: "ID not found"
            }
        })
    }
}

module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.deleteUser = deleteUser;
module.exports.getUsers = getUsers;
module.exports.updateUser = updateUser;
