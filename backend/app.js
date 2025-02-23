const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const path = require('path'); // Import path module
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

require('dotenv').config();

//routes
const transactionsRoutes = require('./routes/transactions');
app.use('/api/v1', transactionsRoutes);

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

server()