// import React, { useState } from 'react';

// function Formulario() {
//   const [nombre, setNombre] = useState(''); // Estado para manejar el nombre ingresado por el usuario

//   return (
//     <div>
//       <h1>React Hello</h1>
//       {/* Campo de entrada para el nombre */}
//       <label>
//         Nombre:
//         <input
//           type="text"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)} // Actualiza el estado al escribir
//         />
//       </label>
      
//       {/* Botón para mostrar el mensaje */}
//       <button onClick={() => alert(`Hello: ${nombre}`)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default Formulario;


import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que la página se recargue

    const data = { nombre, email }; // Objeto con los datos a enviar

    try {
      const response = await fetch('http://localhost:3000/api/users/register', { // Reemplaza con la URL real de tu API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      const result = await response.json();
      alert(`Respuesta del servidor: ${JSON.stringify(result)}`);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al enviar los datos.');
    }
  };

  return (
    <div>
      <h1>React Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
