import React from 'react';
import './style.css'; // Archivo de estilos (puedes ajustar el nombre según tu configuración)

// Componente de navegación
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <h1>¿Es recomendable JavaScript?</h1>
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
        <h2>JavaScript es recomendable en muchos escenarios, especialmente en el desarrollo web.
        Es esencial para el desarrollo frontend, y con Node.js, se utiliza también en el backend,
        permitiendo un desarrollo full-stack coherente.
        La amplia comunidad y el robusto ecosistema de bibliotecas y frameworks,
        junto con la buena integración con tecnologías web modernas,
        hacen que JavaScript sea una elección sólida. Además,
        su adopción generalizada en la industria y la evolución constante del lenguaje son beneficios adicionales.
        Sin embargo, la elección del lenguaje debe considerar el contexto del proyecto,
        los requisitos específicos y las preferencias del equipo de desarrollo.
        En general, JavaScript ofrece muchas ventajas, especialmente en el ámbito del desarrollo web..</h2>
            
      </div>
    </div>
  );
};

export default App;