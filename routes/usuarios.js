const express = require('express');
const router = express.Router();
const model = require('./../models/usuarios');

const get = (req, res) => {
    model.getAll()
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err))
};

const create = (req, res) => {
    console.log(req.body)
    model.create(req.body)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err))
    
};
const update = (req, res) => {
    model.update(req.params.id, req.body)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err))
    console.log(req.params.id)
};

router.get('/', get);
router.post('/create', create);
router.post('/update/:id', update); 

module.exports = router;

