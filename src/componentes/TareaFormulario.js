import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  // Estado para almacenar el valor del input
  const [input, setInput] = useState('');

  // Manejar el cambio del input
  const manejarCambio = e => {
    setInput(e.target.value);
  };

  // Manejar el envío del formulario
  const manejarEnvio = e => {
    e.preventDefault();

    // Crear una nueva tarea con un ID único generado por uuidv4
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    // Enviar la nueva tarea al componente padre a través de la función onSubmit
    props.onSubmit(tareaNueva);
  };

  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      {/* Input para ingresar el texto de la tarea */}
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      {/* Botón para agregar la tarea */}
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;

