import React from 'react';
import './style.css'; // Archivo de estilos (puedes ajustar el nombre según tu configuración)

// Componente de navegación
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <h1>JavaScripts</h1>
      </ul>
    </nav>
  );
};

// Componente principal
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        {/* Contenido de la aplicación */}
        <h2>JavaScript es un lenguaje de programación interpretado,
          dialecto del estándar ECMAScript. Se define como orientado a objetos,
          basado en prototipos, imperativo, débilmente tipado y dinámico.</h2>
            
      </div>
    </div>
  );
};

export default App;

