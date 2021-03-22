const categoria = require('../models').categoria

module.exports = {
    index: (req, res) => {
        categoria.findAll().then(rows => {
            res.render('categorias/index', {rows})
        }).catch(error => console.log(error))
    },
    create: (req, res) => {
        res.render('categorias/create')
    },
    store: (req, res) => {
        categoria.create({ nombre: req.body.nombre })
        .then(result => res.redirect('/categorias'))
        .catch(error => console.log(error) )
    },
    show: (req, res) => {
        categoria.findByPk(req.params.id).then(row => {
            res.render('categorias/show', {row})
        }).catch(error => console.log(error))
    },
    edit: (req, res) => {
        categoria.findByPk(req.params.id).then(row => {
            res.render('categorias/edit', {row})
        }).catch(error => console.log(error))
    },
    update: (req, res) => {
        categoria.update({ nombre:req.body.nombre}, { where:{id: req.params.id} })
            .then(() => res.redirect('/categorias/' + (req.params.id)))
            .catch(error => console.log(error))

        // categoria.findByPk(req.params.id).then(row => {
        //     row.nombre = req.body.nombre
        //     row.save().then(() => {
        //         res.redirect('/categorias/' + (req.params.id))
        //     })
        // }).catch(error => console.log(error))
    },
    destroy: (req, res) => {
        categoria.destroy({ where:{id: req.params.id} })
            .then(() => res.redirect('/categorias'))
            .catch(error => console.log(error))
    }
}