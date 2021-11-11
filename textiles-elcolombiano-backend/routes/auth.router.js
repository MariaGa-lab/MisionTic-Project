const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const verifyToken = require('../middlewares/verifyToken');

router.post('/login', async (req, res) => {
    body('email', 'El email es requerido y debe estar entre(6,100) carecteres').exists()
    .isLength({ min: 5, max: 100 });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(403).json({status: "Correo no válido" + err.message})
    }

    const user = await UserSchema.findOne({ email: req.body.email });
    if (user.state != "Autorizado") {
        res.status(403).json({status: "El usuario no está autorizado" + err.message})
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '10h' }
    );

    res.status(200).json({ token });

});

router.get('/verificarToken', (req, res) => {
    res.status(200).json({status: "Token válido"})
});

module.exports = router;