const express = require('express');
const router = express.Router();
const model = require('./../models/login');




/*const getUsuario = (req, res) => {
    //const {email, password} = req.body;
    //getUsuario(email, password)
    model.getUsuario(req.body)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err))
};*/

const getUsuario = (req, res) => {
    model.getUsuario(req.body)
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err))
};

router.get('/', getUsuario)

module.exports = router;