import React from 'react';
import Componente1 from './components/Navbar';
import Componente2 from './components/navbardos';
import Componente3 from './components/navbartres';
import Componente4 from './components/navbarcuatro';
import Componente5 from './components/navbarcinco';
import Componente6 from './components/navbarseis';

const App = () => {
  return (
    <div>
      
      <Componente1 />
      <Componente2 />
      <Componente3 />
      <Componente4/>
      <Componente5/>
      <Componente6/>
      {/* Renderiza los Componentes 3, 4, 5, y 6 de manera similar */}
    </div>
  );
}

export default App;
