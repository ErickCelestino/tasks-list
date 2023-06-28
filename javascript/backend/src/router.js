const express = require('express');
const tasksController = require('./tasks/tasksController.js');
const greetings = require('./greetings.js');

const router = express.Router();

router.get('/', greetings.greetings);
router.get('/tasks', tasksController.findAll);

module.exports = router;