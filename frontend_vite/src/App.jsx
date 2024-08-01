import './App.css'
import React from 'react';
import Home from './contanier/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      )
    }
    
export default App;