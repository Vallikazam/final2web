# Expense Tracker
### Group: SE-2321 Web2Final 
### Student: Alinur Zhumadil

## Project Overview
Expense Tracker is a web application designed to help users manage their finances effectively. The application allows users to track their income and expenses, visualize their financial health, and make informed decisions.

## Features
- User registration and login
- Add, view, and delete expenses
- Add, view, and delete incomes
- Visual representation of income vs. expenses using charts
- User-friendly interface
- Secure and private data handling

## Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/b31e8dbe-f146-43ee-8317-4af54ddbc664" alt="Снимок экрана 2025-02-23 204514"><br>
   Main Page
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/986df10b-83af-4d31-b185-a93f7aed26ae" alt="Снимок экрана 2025-02-23 204451"><br>
   Login
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/39657f12-596f-4c6b-8f6c-c626327555f6" alt="Снимок экрана 2025-02-23 204528"><br>
   Register
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/cabe8aa6-5181-4a95-ac02-470ee51ed6cd" alt="Снимок экрана 2025-02-23 204729"><br>
   Welcome Page with chart(pie diagram) based on users transactions
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/a8d5e0fa-61b5-476b-b7ef-4fbd02b8966a" alt="Снимок экрана 2025-02-23 204659"><br>
   Income Form and history table
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/0e4a9906-9da8-4de4-8158-032ed48e48cb" alt="Снимок экрана 2025-02-23 204740"><br>
   Expense Form and history table
</p>
## Project Structure

### Frontend  
```
frontend/  
├── public/                
├── src/                    
│   ├── components/      
│   ├── pages/         
│   ├── pagesCSS/        
│   ├── App.js           
│   ├── App.css         
│   └── index.js        
└── package.json          
```

### Backend  
```
backend/  
├── controllers/          
├── models/           
├── routes/             
├── middleware/            
├── app.js               
└── package.json        
```

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
