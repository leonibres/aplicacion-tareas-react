import React from 'react';
import './App.css'; // Importación del archivo de estilos CSS para el componente App
import leonibresLogo from './imagenes/logoLeoniBres.jpg'; // Importación de la imagen del logo de LeoniBres
import ListaDeTareas from './componentes/ListaDeTareas'; // Importación del componente ListaDeTareas

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="leonibres-logo-contenedor">
        <img
          src={leonibresLogo}
          className="leonibres-logo"
          alt="Logo de LeoniBres" // Descripción alternativa para la imagen
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1> {/* Título de la sección de tareas */}
        <ListaDeTareas /> {/* Componente ListaDeTareas */}
      </div>
    </div>
  );
}

export default App;
