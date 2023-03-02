const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts.js');

router.get('/', contactsController.getAllContants);

router.get('/:id', contactsController.getOneContant);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;