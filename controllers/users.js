const { response } = require('express');

const users_get = ( req, res = response ) => {

    const { q, nombre = 'Not name', apikey, page = 1, limit } = req.query;

    res.json({
        msg:'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const users_post = ( req, res = response ) => {

    const { nombre, edad } = req.body;

    res.json({
        msg:'post API - controlador',
        nombre,
        edad
    });
}

const users_put = ( req, res = response ) => {

    const id = req.params.id;
    res.json({
        msg:'put API - controlador',
        id
    });
}

const users_patch = ( req, res = response ) => {
    res.json({
        msg:'patch API - controlador'
    });
}

const users_delete = ( req, res = response ) => {
    res.json({
        msg:'delete API - controlador'
    });
}

module.exports = {
    users_get,
    users_post,
    users_put,
    users_patch,
    users_delete
}