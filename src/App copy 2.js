import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Rutas from './ruteo/Rutas'


const App = () => {
  return (
    <div style={{background:"violet"}}>
      <h1>App.js</h1>
      <Router>
        <BarraNavegacion />
        <Rutas />       
      </Router>
      Pagina de app.js
    </div>
  )
}

export default App
