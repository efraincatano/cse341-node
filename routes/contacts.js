const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts.js');

router.get('/', contactsController.getAllContants);

router.get('/:id', contactsController.getOneContant);

module.exports = router;