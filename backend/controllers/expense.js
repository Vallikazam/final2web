const Expense = require('../models/expenseModel');

exports.addExpense = async (req, res) => {
    const { title, description, amount, date, category } = req.body;
    const expense = new Expense({ title, description, amount, date, category, user: req.user.id });
    try {
        await expense.save();
        res.status(201).json({ message: 'Expense added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.id });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    await Expense.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({message: 'Expense deleted successfully'});
        })
        .catch((error) => {
            res.status(500).json({message: 'Server Error'});
        })
}

exports.updateExpense = async (req, res) => {
    const {id} = req.params;
    const {title, description, amount, category, date} = req.body;
    await Expense.findByIdAndUpdate(id, {title, description, amount, category, date})
        .then(() => {
            res.status(200).json({message: 'Expense updated successfully'});
        })
        .catch((error) => {
            res.status(500).json({message: 'Server Error'});
        })
}
