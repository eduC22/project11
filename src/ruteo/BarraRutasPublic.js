import React from 'react'
import { Routes, Route, Link, Outlet, Switch, Redirect} from 'react-router-dom';

import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

import Home from '../public/Home';
import Dashboard from '../public/Dashboard';
import Informacion from '../public/Informacion';
import Noticias from '../public/Noticias';
import LoginForm from '../login/LoginForm';
import RegisterForm from '../login/RegisterForm';

const BarraRutasPublic = () => {
    const { user } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();
         
    const handleSignOut = () => {
      if (user) {
        signOut(auth)
          .then(() => {
            // Cierre de sesión exitoso
            navigate('/home'); // Redirigir a ruta /home
          })
          .catch((error) => {
            console.error('Error al cerrar sesión:', error);
          });
      }
    }
    
  
    return (
      <div style={{ background:"greenyellow", }}>
        <nav>
          <div id="login">
            <ul>
              <li><Link to="/RegisterForm">Registrar</Link></li>
  
              {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/LoginForm">Iniciar sesión</Link> </li>
              )}
              
                                  
            </ul>
          </div>
          
          <div id="menu">
            <ul>
              <li><Link to="/">Portada</Link> </li>
              <li><Link to="/home">Home</Link> </li>
              <li><Link to="/Informacion">Informacion</Link> </li>
              <li><Link to="/Noticias">Noticias</Link> </li>
            </ul>
          </div>
        </nav>
  
        <Routes>
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Informacion" element={<Informacion />} />
          <Route path="/Noticias" element={<Noticias />} />
        </Routes> 
      </div>
    )
}

export default BarraRutasPublic;

/*
  
                {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
              )}
  
  
  /*


/*
const handleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Cierre de sesión exitoso
          navigate('/home'); // Redirigir a ruta /home
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
        });
    }
  }
*/

