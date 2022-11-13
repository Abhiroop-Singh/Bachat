import React from "react";
import Login from './components/Login';
import Homepage from "./components/Homepage/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/expenseTracker' element={<ExpenseTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;