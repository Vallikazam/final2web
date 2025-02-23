const { addIncome, getIncomes, deleteIncome, updateIncome } = require('../controllers/income');
const { addExpense, getExpenses, deleteExpense, updateExpense } = require('../controllers/expense');
const { registerUser, loginUser } = require('../controllers/user');
const auth = require('../middleware/auth');
const router = require('express').Router();

// User registration and login routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Income routes
router.post('/incomes', auth, addIncome);
router.get('/incomes', auth, getIncomes);
router.delete('/incomes/:id', auth, deleteIncome);
router.put('/incomes/:id', auth, updateIncome);

// Expense routes
router.post('/expenses', auth, addExpense);
router.get('/expenses', auth, getExpenses);
router.delete('/expenses/:id', auth, deleteExpense);
router.put('/expenses/:id', auth, updateExpense);

module.exports = router;