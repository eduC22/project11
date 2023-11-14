import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {useAuth } from "./ruteo/AuthContext";
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import BarraRutasPublic from './ruteo/BarraRutasPublic';

const App = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Saludos soy Julio Eduardo Tamo Cáceres</h1><br/>
      Hoy es 14 de noviembre del 2023 y son las 16:45 pm
     <Router>
      { user ? <BarraRutasProtected /> : <BarraRutasPublic />}
     </Router>
        
    </div>
  )
}

export default App
