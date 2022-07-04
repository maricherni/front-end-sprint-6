import './App.css';
import React from 'react';
import {Escena, Boton} from "./components/escena/Escena";
import {Textos} from './components/escena/Textos';

function App() {
  const [frases, setFrases] = React.useState(Textos)
  
  const frasesHistoria = frases.map(frase => (
    <div key={frase.text}>
      <Escena 
        texto = {frase.text} 
        active = {frase.active}
      />
    </div>
  ))

 function isActivePrev(){
    const activeIndex = frases.findIndex(frase => frase.active); //Buscar índice de frase activa
        activeIndex === 0? frases[activeIndex].active = true : frases[activeIndex].active = false; // desactivar la frase actual, pero si está en primera posición se queda activada
    const prevText = activeIndex === 0 ? frases[activeIndex]: frases[activeIndex-1]; 
        prevText.active = true; // activar la frase anterior 
        console.log(frases[activeIndex], prevText)
  }

  const isActiveNext = ()=> {
      const activeIndex = frases.findIndex(frase => frase.active);
        activeIndex === frases.length-1? frases[activeIndex].active = true : frases[activeIndex].active = false; // desactivar la frase actual, pero si está en última posición se queda activada
      const nextText = activeIndex === frases.length-1? frases[activeIndex]: frases[activeIndex+1]; 
        nextText.active = true; // activar la frase siguiente     
        console.log(frases[activeIndex], nextText)
  }

  return (
   <div>
    <div className="buttons">
      <button onClick={isActivePrev}><Boton textoBoton = 'Anterior'/></button>
      <button onClick={isActiveNext}><Boton textoBoton = 'Següent'/></button>
    </div>
    <div>{frasesHistoria}</div>
    </div> 
   
  )
};

export default App;
