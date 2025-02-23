# Expense Tracker

## Project Overview
Expense Tracker is a web application designed to help users manage their finances effectively. The application allows users to track their income and expenses, visualize their financial health, and make informed decisions. This project is part of the Web2Final course and was developed by Alinur Zhumadil.

## Features
- User registration and login
- Add, view, and delete expenses
- Add, view, and delete incomes
- Visual representation of income vs. expenses using charts
- User-friendly interface
- Secure and private data handling

## Project Structure
frontend/
├── public/ # Public assets
├── src/ # Source files for the frontend
│ ├── components/ # Reusable components
│ ├── pages/ # Page components
│ ├── pagesCSS/ # CSS files for pages
│ ├── App.js # Main application component
│ ├── App.css # Global styles
│ └── index.js # Entry point for React
└── package.json # Frontend dependencies and scripts
backend/
├── controllers/ # Controllers for handling requests
├── models/ # Mongoose models for MongoDB
├── routes/ # API routes
├── middleware/ # Middleware for authentication
├── app.js # Main application file
└── package.json # Backend dependencies and scripts

## Tools and Technologies Used
- **Frontend:**
  - React: A JavaScript library for building user interfaces
  - Axios: For making HTTP requests
  - Chart.js: For visualizing data with charts
  - Bootstrap: For responsive design

- **Backend:**
  - Node.js: JavaScript runtime for server-side development
  - Express: Web framework for Node.js
  - Mongoose: ODM for MongoDB
  - MongoDB: NoSQL database for storing user data

## Installation
To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Navigate to the `frontend` directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Navigate to the `backend` directory and install dependencies:
   ```bash
   cd ../backend
   npm install
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

5. In a new terminal, navigate to the `frontend` directory and start the frontend:
   ```bash
   cd frontend
   npm start
   ```

6. Open your browser and go to `http://localhost:3000` to view the application.

## Conclusion
Expense Tracker is a comprehensive tool for managing personal finances. With its user-friendly interface and powerful features, it aims to simplify the process of tracking income and expenses. Feel free to contribute to the project or reach out for any questions or suggestions.