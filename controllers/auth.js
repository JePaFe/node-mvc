const user = require('../models').user

const { validationResult } = require('express-validator')

module.exports = {
    register: (req, res) => {
        res.render('auth/register')
    },
    create: (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            //return res.status(400).json({ errors: errors.array() });
            return res.render('auth/register', { errors: errors.array() })
        }

        user.create({ email: req.body.email, password: req.body.password })
            .then(result => res.redirect('/'))
            .catch(error => console.log(error) )
    },
    formLogin: (req, res) => {
        res.render('auth/login')
    },
    login: (req, res) => {
        user.login(req.body.email, req.body.password)
            .then(user => {
                if (user) {
                    req.session.userId = user.id
                    console.log(req.session)
                }
                res.redirect('/')
            })
            .catch(error => console.log(error) )
    },
    logout: (req, res) => {
        req.session.destroy(() => {
            res.redirect('/')
        })
    }
}