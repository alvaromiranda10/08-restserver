const { Router } = require('express');

const { users_get,
        users_put,
        users_post,
        users_delete,
        users_patch } = require('../controllers/users');

const router = Router();

router.get('/', users_get);

router.put('/:id', users_put);

router.post('/', users_post);

router.delete('/', users_delete);

router.patch('/', users_patch);

module.exports = router;