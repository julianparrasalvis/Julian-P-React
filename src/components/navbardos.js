import React from 'react';
import './style.css'; // Archivo de estilos (puedes ajustar el nombre según tu configuración)

// Componente de navegación
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <h1>Para Que Sirve</h1>
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
        <h2>JavaScript es un lenguaje de programación que los desarrolladores
        utilizan para hacer páginas web interactivas. Desde actualizar fuentes
        de redes sociales a mostrar animaciones y mapas interactivos,
        las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.</h2>
            
      </div>
    </div>
  );
};

export default App;
