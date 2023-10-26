import React, { useState } from 'react'
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';



const AppForm = () => { 
  
  //////// GUARDAR / ACTUALIZAR /////
  const camposRegistro = {Nombre:"", Edad:"", Genero:""}
  const[objeto, setobjeto] = useState (camposRegistro);
  console.log(objeto);
  
  const handleSubmit = (e) => {  ////manejador de submit
      e.preventDefault();

      try{
         if(validarForm()){
             addDoc(collection(db, 'persona'), objeto)
             console.log("Se guardo con exito")
         } else 
         {
              console.log("No se guardo");
         }
      } catch (error){
          console.error();
      }
    }

  /////// manejador del estado de cambios ////////
      const handleStatusChange = (e) => {
        const {name, value} = e.target;
        setobjeto({...objeto, [name]: value});
        console.log({name, value})
    }
    
  /////// VALIDACION ///////
      const validarForm = (xId) => {
          if(objeto.Nombre===''){
              alert("Escriba nombres...");
              return false;
          }
          return true;
      }
      
      return (
    <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
       <form onSubmit={handleSubmit}>
        <h1>AppForm.js</h1>
      
        <input onChange={handleStatusChange}
        value={objeto.Nombre} name='Nombre'        
        type='text' placeholder='Nombre.....'/><br></br>
        
        <input onChange={handleStatusChange}
        value={objeto.Edad} name='Edad'        
        type='text' placeholder='Edad.....'/><br></br>
                            
        <select onChange={handleStatusChange}
          name='genero' >
          <option value="">Seleccione genero....</option>
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
