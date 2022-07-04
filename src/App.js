import './App.css';
import React from 'react';
import {useState} from 'react';
import {Escena, Boton} from "./components/escena/Escena";
import {Textos} from './components/escena/Textos';
import {Center} from './components/escena/Styled.js';

function App() {
  const [frases, setFrases] = useState(Textos)
  
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

  function isActiveNext () {
      const activeIndex = frases.findIndex(frase => frase.active);
        activeIndex === frases.length-1? frases[activeIndex].active = true : frases[activeIndex].active = false; // desactivar la frase actual, pero si está en última posición se queda activada
      const nextText = activeIndex === frases.length-1? frases[activeIndex]: frases[activeIndex+1]; 
        nextText.active = true; // activar la frase siguiente     
        console.log(frases[activeIndex], nextText)
  }

  //RENDERIZADO CONCIDIONAL. Para que aparezca una página de inicio antes de la historia.
  let [pagInicial, setPagInicial] = useState(true);


  return (
  <div>
    {pagInicial && 
     <div>
        <Center><h1>Una història d'herois</h1></Center>
        <Center><p>A continuació t'endinsaràs en una gran història d'herois. </p>
                <p>Trobaràs dos botons que et permetran avançar i retrocedir en la història. Posa't còmode i gaudeix.</p></Center>
        <Center><button onClick={()=> setPagInicial(pagInicial === true? pagInicial = false : pagInicial = true)}><Boton textoBoton = 'Començar història'/></button></Center>
      </div>
    }
    {!pagInicial &&
    <div className="buttons">
      <button onClick={isActivePrev}><Boton textoBoton = 'Anterior'/></button>
      <button onClick={isActiveNext}><Boton textoBoton = 'Següent'/></button>
    </div> 
    }
    {!pagInicial &&
      <div>{frasesHistoria}</div>
    }
  </div> 
  
  )
};

export default App;
