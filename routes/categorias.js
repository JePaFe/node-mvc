const express = require('express')
const router = express.Router()

const categorias = require('../controllers/categorias')

router.route('/categorias')
    .get(categorias.index)
    .post(categorias.store)

router.get('/categorias/create', categorias.create)

router.get('/categorias/:id', categorias.show)

router.get('/categorias/:id/edit', categorias.edit)

router.put('/categorias/:id', categorias.update)

router.delete('/categorias/:id', categorias.destroy)

module.exports = router