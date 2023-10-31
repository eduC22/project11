import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';



const AppForm = (props) => { 
  
  //////// GUARDAR / ACTUALIZAR /////
  const camposRegistro = {Nombre:"", Edad:"", Genero:""}
  const[objeto, setobjeto] = useState (camposRegistro);
  //////console.log(objeto);
  
  const handleSubmit = async (e) => {  ////manejador de submit
      e.preventDefault();

      try{
         if(props.idActual === ""){ /////GUARDAR
           if (validarForm()){
              addDoc(collection(db, 'persona'), objeto);
              console.log("Se guardo con exito");
          } else {
             console.log("No se guardo");
         }
      }else {                    ///////ACTUALIZAR
        await updateDoc(doc(collection(db, "persona"), props.idActual), objeto);
        alert("Se actualizo");
        props.setIdActual('');
        }
        setobjeto(camposRegistro);  
      }catch (error){
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
  
 ///////// OBTENER REGISTRO POR IDACTUAL /////////////
    useEffect(() => {
      if( props.idActual === ""){
          setobjeto({...camposRegistro});
      }else{
          obtenerDatosPorId(props.idActual);
      }
    }, [props.idActual]);

    const obtenerDatosPorId = async (xId) =>{

      const objPorId = doc(db, "persona", xId);
      const docPorId = await getDoc(objPorId);
      if (docPorId.exists()) {

        setobjeto(docPorId.data());
      }else{
        console.log("no hay doc...");
      }

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
          name='genero' value={objeto.genero} >
          <option value="">Seleccione genero....</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select><br></br>
       <button>
            {props.idActual === "" ? "Guardar":"Actualizar"}
       </button>
       </form>  
      
    </div>
  )
}



export default AppForm
