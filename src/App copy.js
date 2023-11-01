import logo from './logo.svg';
//import './App.css';
import C01componente from './Componentes/C01componente';
import AppForm from './Componentes/AppForm';
import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from './Componentes/firebase';

function App() {
  ////////READ - LECTURA ////////
  const [docBd, setDocBd] = useState([]);
  const fnRead = () => {
    try {
      const xColeccionConQuery = query(collection(db, "persona"));

      const unSubscrite = onSnapshot(xColeccionConQuery, (xDatosBD) => {
        const xDoc = [];
        xDatosBD.forEach( (doc) => {
         xDoc.push({id: doc.id, ...doc.data()});
        });
        setDocBd(xDoc);
      });
  } catch (error) {
    console.error(error);
  }
}

//fnRead();
useEffect( () => {
  fnRead();
}, []);

/////// DELETE - ELIMINAR /////////
  const [idActual,setIdActual] = useState("");
  const fnDelete = async (xId) => {
    if(window.confirm("Confirme para eliminar")){
      await deleteDoc(doc(db, 'persona', xId));
      console.log("Se elimino...."+xId)
    }

  }

  return (
    <div style={{width:"350px", background:"greenyellow", padding:"10px"}}>
      <AppForm {...{idActual, setIdActual, fnRead}}/>
      {
        docBd.map((p) =>
          <p key={p.id}>
            No. {p.nombre}...
            <span onClick={() => fnDelete(p.id)}>x</span>
            .....
            <span onClick={() => setIdActual(p.id)}>A</span>
          </p>
        )
      }  

    </div>
  );
}

export default App;
