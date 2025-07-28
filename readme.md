# Todo App - Quick Setup Guide

## Prerequisites
- Node.js (v14+)
- MongoDB (local or MongoDB Atlas)

## Project Structure
```
todo-app/
├── backend/
└── frontend/
```

## Setup Steps

### 1. Create Project
```bash
mkdir todo-app
cd todo-app
mkdir backend frontend
```

### 2. Backend Setup
```bash
cd backend
npm init -y
npm install express mongoose cors dotenv
npm install -D nodemon
```

Create all backend files as provided, then:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npx create-react-app .
npm install axios
```

Create all frontend files as provided, then:
```bash
npm start
```

### 4. Start MongoDB
```bash
# Local MongoDB
mongod

# Or use MongoDB Atlas connection string in .env
```

## Access
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Environment Variables
Create `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp
```

## That's it! 