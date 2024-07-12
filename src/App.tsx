import React from 'react';

import './App.css';
import NavTop from "./components/NavTop";
import FormularioImc from "./components/FormularioImc";
// import Calculadora from "./components/Calculadora";
// import Footer from "./components/Footer";



function App() {



  return (
    <div className="App">
     <NavTop />
     <main>
      <FormularioImc />
     </main>
     {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
