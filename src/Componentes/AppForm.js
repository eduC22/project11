import React, { useState } from 'react'
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';



const AppForm = () => { 
  
  //////// GUARDAR / ACTUALIZAR /////
  const camposRegistro = {Nombre:"", Edad:"", Genero:""}
  const[objeto, setobjeto] = useState (camposRegistro);
  
  const handleSubmit = (e) => {  ////manejador de submit
      e.preventDefault();

      try{
         if(db){
             addDoc(collection(db, 'cliente'), objeto)
             console.log("Se guardo con exito")
         }
      } catch (error){
          console.error();
      }
  }
  return (
    <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
       <form onSubmit={handleSubmit}>
        <h1>AppForm.js</h1>
        <input type='text' placeholder='Nombre.....'/>
        <input type='text' placeholder='Edad.....'/>
        <input type='text' placeholder='Sexo.....'/>        
        <select>
          <option value="">Seleccione....</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select><br></br>
       <button>
            GUARDAR/ACTUALIZAR
       </button>
       </form>  
      
    </div>
  )
}

export default AppForm
