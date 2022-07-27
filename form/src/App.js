import React from 'react';
import LogIn from './components/LogIn';
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home';
import "./Styles/form.css"
import "./Styles/home.css"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
