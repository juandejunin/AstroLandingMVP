import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(''); 
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');  
    setMensaje(''); 

    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje(data.mensaje);
        setEnviado(true);
      } else {
        setError(data.error || 'Ocurrió un error al enviar el formulario.');
      }

      setEnviado(true); 
    } catch (error) {
      console.error('Error:', error);

    }
  };

  return (
     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {enviado ? (
        <div className="text-green-500 font-bold">{mensaje}</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-2xl font-semibold text-center">Registro</h1>
          <div>
            <label htmlFor="nombre" className="block text-lg">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
          {error && error !== '' && <div className="text-red-500 mt-2">{error}</div>}

        </form>
      )}
    </div>
  );
}

export default Formulario;
