import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {LoginPage, SignUpPage} from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
