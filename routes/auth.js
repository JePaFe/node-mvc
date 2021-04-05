const express = require('express')
const router = express.Router()

const { body } = require('express-validator')

const auth = require('../controllers/auth')

router.get('/register', auth.register)
router.post('/register', [
    body('email').isEmail().withMessage('El correo electrónico es incorrecto'),
    body('password').isLength({ min: 5 }).withMessage('La contraseña debe tener 5 caracteres o mas'),
], auth.create)

router.get('/login', auth.formLogin)
router.post('/login', auth.login)

router.get('/logout', auth.logout)

module.exports = router