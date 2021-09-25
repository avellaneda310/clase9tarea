const db = require("./../utils/bd");



const getAll = () => db('usuarios').select();
const create = (objeto) => db('usuarios').insert(objeto);
const update = (id, obj) => db('usuarios').where({'id': id}).update(obj);

module.exports = {getAll, create, update};
