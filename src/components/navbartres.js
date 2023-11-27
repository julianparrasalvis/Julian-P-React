import React from 'react';
import './style.css'; // Archivo de estilos (puedes ajustar el nombre según tu configuración)

// Componente de navegación
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <h1>¿Es JavaScript el mejor lenguaje?</h1>
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
        <h2>No hay un "mejor" lenguaje de programación en general,
          ya que la elección depende de factores como el proyecto,
          las preferencias del desarrollador y otros contextos.
          JavaScript es ampliamente utilizado, especialmente en el desarrollo web,
          debido a su capacidad para ejecutarse en navegadores y en el lado del servidor con Node.js.
          Sin embargo, la elección del lenguaje puede variar según las necesidades del proyecto, 
          el rendimiento requerido y las preferencias del equipo de desarrollo.
          En resumen, no hay un lenguaje único que sea el mejor en todas las situaciones..</h2>
            
      </div>
    </div>
  );
};

export default App;