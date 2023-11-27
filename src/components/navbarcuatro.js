import React from 'react';
import './style.css'; // Archivo de estilos (puedes ajustar el nombre según tu configuración)

// Componente de navegación
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <h1>¿Es JavaScript el lenguaje mas usado en el mundo?</h1>
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
        <h2>JavaScript es uno de los lenguajes de programación más utilizados
        y populares en el mundo, especialmente en el desarrollo web.
        Su versatilidad, capacidad para ejecutarse en navegadores y
        en el lado del servidor con Node.js contribuyen a su amplia adopción.
        Sin embargo, la popularidad puede variar según distintos indicadores,
        y es recomendable consultar fuentes actualizadas para obtener la información
        más reciente sobre las tendencias en lenguajes de programación..</h2>
            
      </div>
    </div>
  );
};

export default App;