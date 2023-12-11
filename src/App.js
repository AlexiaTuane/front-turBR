import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Sistema from './SisInterno/Sistema';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/login'
            element={<Login onAuthentication={setAuthenticated} />}
          />
          <Route path='/sistema/*' element={<Sistema />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
