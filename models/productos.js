const db = require("./../utils/bd");

const getAll = () => db('productos').select();// ver que productos tengo
const create = (obj) => db('productos').insert(obj);
const single = (id) => db('productos').where({'id': id, 'eliminado': false}).select('nombre','precio', 'id_proveedor');
const update = (id, obj) => db('productos').where({'id': id}).update(obj);




module.exports = {getAll, create, single, update};