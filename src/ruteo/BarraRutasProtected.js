import { Routes, Route, Outlet, Switch, Redirect} from 'react-router-dom';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

///////////////// PROTEGIDA - SistemaCRUD //////////////
import SistemaCRUD from '../protegido/SistemaCRUD';
import ListaDeAlumnos from '../protegido/sistemacrud/ListaDeAlumnos';

///////////////// PROTEGIDA - SistemaFILE //////////////
import SistemaFILE from '../protegido/SistemaFILE';
import Fotos from '../protegido/sistemafile/Fotos';

//////////////////////// PAG. PUBLICOS /////////////////
import RegisterForm from '../login/RegisterForm';
import LoginForm from '../login/LoginForm';
import AppLista from '../protegido/sistemacrud/AppLista';
////import ListaDeProfesores from '../protegido/sistemacrud/ListaDeProfesores';
import Carreras from '../protegido/sistemacrud/Carreras';
import Deportes from '../protegido/sistemacrud/Deportes';
import Videos from '../protegido/sistemafile/Videos';
import DocPDF from '../protegido/sistemafile/DocPDF';
import DocWord from '../protegido/sistemafile/DocWord';
import Egresados from '../protegido/sistemacrud/Egresados';


const BarraRutasProtected = () => {
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
      <div>
        <nav>
          <div id="login">
            <ul>
            <li><Link to="/nuevoregistro">Registrar</Link></li>

            {user ? (         ////////  Usuario autenticado  ///////////
                <li>Usuario autenticado: <span> {user.email}</span> </li> 
                 ) : (
            null
            )}
  
            {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/LoginForm">Iniciar sesión</Link> </li>
              )}
  
            </ul>
          </div>
              
          <div id="menu">
            <ul>
           {/*<li><Link to="/sistema-crud/ListaDeProfesores">Profesores</Link> </li>*/}
              <li><Link to="/sistema-crud/Carreras">Carreras</Link> </li>
              <li><Link to="/sistema-crud/Deportes">Deportes</Link> </li>
              <li><Link to="/sistema-crud/Egresados">Egresados</Link> </li>
              <li><Link to="/sistema-crud/AppLista">Alumnos(AppLista)</Link> </li>

                            <li><Link to="/sistema-file/Videos">Videos</Link> </li>
              <li><Link to="/sistema-file/fotos">Fotos</Link> </li>
              <li><Link to="/sistema-file/DocPDF">Doc.PDF</Link> </li>
              <li><Link to="/sistema-file/DocWord">Doc.Word</Link> </li>

            </ul>
          </div>
        </nav>
  
        <Routes>

          <Route path="/iniciarsesion" element={<LoginForm />} />
          <Route path="/nuevoregistro" element={<RegisterForm />} />

          
          <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
            <Route index element={<SistemaCRUD />} />
         {/*<Route path="ListaDeProfesores" element={<ListaDeProfesores />} />*/}
            <Route path="Carreras" element={<Carreras />} />
            <Route path="Deportes" element={<Deportes />} />
            <Route path="Egresados" element={<Egresados />} />
            <Route path="AppLista" element={<AppLista />} />
          </Route>
  
  
          <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
            <Route index element={<SistemaFILE />} />
            
            <Route path="videos" element={<Videos />} />
            <Route path="fotos" element={<Fotos />} />
            <Route path="DocPDF" element={<DocPDF />} />
            <Route path="DocWord" element={<DocWord />} />
          </Route>
  
        </Routes>        
      </div>
    )
}
       
export default BarraRutasProtected;
     
function MarcoParaSistemaCRUD() {
    return (
      <div>
        <h1>Marco sistema CRUD</h1>
        < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
      </div>
    );
  }
  
function MarcoParaSistemaFILE() {
    return (
      <div>
        <h1>Marco Sistema FILES</h1>
        < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
      </div>
    );
}
  


  
  /*
  
                {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/iniciarsesion">Iniciar sesión</Link> </li>
              )}

              <li><Link to="/nuevoregistro">Registrar</Link></li>

              {user ? (         ////////  Usuario autenticado  ///////////
                <li>Usuario autenticado: <span> {user.email}</span> </li> 
                ) : (
                null
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
  
