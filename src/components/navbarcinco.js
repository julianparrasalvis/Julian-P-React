import React from 'react';
import './style.css'; // Archivo de estilos (puedes ajustar el nombre según tu configuración)

// Componente de navegación
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <h1>¿En que contexto puedo utilizar el lenguaje de JavaScripts?</h1>
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
        <h2>JavaScript es un lenguaje de programación versátil utilizado en una variedad de contextos:</h2>

<h4>1. Desarrollo Web: Fundamental en el desarrollo del lado del cliente para crear interactividad y en el desarrollo de frameworks como React o Angular. </h4>
   
<h4>2. Desarrollo del Lado del Servidor: A través de Node.js, JavaScript se usa para construir aplicaciones y servicios del lado del servidor.</h4>

<h4>3. Aplicaciones Móviles: Con React Native, puedes desarrollar aplicaciones móviles utilizando JavaScript y React.</h4>

<h4>4. Desarrollo de Juegos: Bibliotecas como Phaser y Three.js facilitan el desarrollo de juegos en el navegador.</h4>

<h4>5. Automatización y Scripting: Utilizado para automatizar tareas en navegadores, sistemas y servidores.</h4>

<h4>6. Desarrollo de Extensiones de Navegador: JavaScript se utiliza para crear extensiones y complementos para navegadores web.</h4>

<h4>7. Desarrollo de Aplicaciones de Escritorio: Con Electron, puedes crear aplicaciones de escritorio usando tecnologías web.</h4>

<h4>8. Internet de las Cosas (IoT): JavaScript se utiliza en algunos entornos para el desarrollo de aplicaciones IoT.</h4>

<h4>9. Bots y Automatización: Se usa en el desarrollo de bots para plataformas de mensajería y en tareas de automatización.</h4>

<h4>10. Machine Learning e Inteligencia Artificial: Bibliotecas como TensorFlow.js permiten trabajar con modelos de machine learning en el navegador.</h4>

<h4>La versatilidad de JavaScript lo hace ampliamente adoptado en diversas áreas del desarrollo de software..</h4>
            
      </div>
    </div>
  );
};

export default App;