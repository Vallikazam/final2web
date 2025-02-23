const Income = require('../models/incomeModel');

exports.addIncome = async (req, res) => {
    const { title, description, amount, date, category } = req.body;
    const income = new Income({ title, description, amount, date, category, user: req.user.id });
    try {
        await income.save();
        res.status(201).json({ message: 'Income added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find({ user: req.user.id });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    await Income.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({message: 'Income deleted successfully'});
        })
        .catch((error) => {
            res.status(500).json({message: 'Server Error'});
        })
}

exports.updateIncome = async (req, res) => {
    const {id} = req.params;
    const {title, description, amount, category, date} = req.body;
    await Income.findByIdAndUpdate(id, {title, description, amount, category, date})
        .then(() => {
            res.status(200).json({message: 'Income updated successfully'});
        })
        .catch((error) => {
            res.status(500).json({message: 'Server Error'});
        })
}
