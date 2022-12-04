import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome.Component.js';
import Contact from '../components/Contact/Contact.Component.js';
const PrincipalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Inicio" element={<Welcome />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Peliculas" element={<Welcome />} />
        <Route
          path="*"
          element={
            <>
              <h1>error 404</h1>
              <h3>esta pagina no existe</h3>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default PrincipalRouter;
