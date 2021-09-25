const db = require("./../utils/bd");

//const getUsuario = (email, password) => db('usuarios').where({'email': email, 'password': password}).select();
const getUsuario = (obj) => db('usuarios').where({'email' : obj.email,'password': obj.password}).select('email', 'password');

module.exports = {getUsuario};