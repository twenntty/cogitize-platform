const express = require('express');
const router = express.Router();
const itemController = require('./Controllers/itemController.js');
const userController = require('./Controllers/userController.js');

router.post('/items', itemController.create);
router.get('/items', itemController.getAll);
router.get('/items/:id', itemController.getOne);
router.put('/items/:id', itemController.update);
router.delete('/items/:id', itemController.delete);

router.post('/register', userController.register);
router.get('/users', userController.getAll);
router.post ('/login', userController.login);

module.exports = router;