const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/', expenseController.addExpense);
router.get('/', expenseController.getExpenses);
router.delete('/:id', expenseController.deleteExpense);

module.exports = router;
