import './App.css';
import React from 'react';
import { GlobalStyle } from './components/escena/Styled.js';
import {useState} from 'react';
import {Escena, Boton, LandingPage} from "./components/escena/Escena";
import {Center} from './components/escena/Styled.js';
import {Frases} from './components/img/Frases';

function App() {
  const frasesHistoria = Frases.map(frase => (
    <div key={frase.text}>
      <Escena 
        texto = {frase.text} 
        active = {frase.active}
      />
    </div>
  ))
  
  let [activeIndex, setActiveIndex] = useState(Frases.findIndex(frase => frase.active));//Buscar índice de frase activa

 function isActivePrev(){
    const activeIndex = Frases.findIndex(frase => frase.active);
       activeIndex === 0? Frases[activeIndex].active = true : Frases[activeIndex].active = false; // desactivar la frase actual, pero si está en primera posición se queda activada
    const prevText = activeIndex === 0 ? Frases[activeIndex]: Frases[activeIndex-1]; 
        prevText.active = true; // activar la frase anterior
        console.log(Frases[activeIndex], prevText) 
  }

  function isActiveNext () {
      const activeIndex = Frases.findIndex(frase => frase.active);
        activeIndex === Frases.length-1? Frases[activeIndex].active = true : Frases[activeIndex].active = false; // desactivar la frase actual, pero si está en última posición se queda activada
      const nextText = activeIndex === Frases.length-1? Frases[activeIndex]: Frases[activeIndex+1]; 
        nextText.active = true; // activar la frase siguiente 
        console.log(Frases[activeIndex], nextText)
  }

  //RENDERIZADO CONCIDIONAL. Para que aparezca una página de inicio antes de la historia.
  let [pagInicial, setPagInicial] = useState(true);


  return (
  <div>
    <GlobalStyle image = {Frases[activeIndex].img}></GlobalStyle> //El fondo irá cambiando a medida que cambie el índice 
    {pagInicial && 
     <div>
        <LandingPage titulo = "Una història d'herois" parrafo1 = "A continuació t'endinsaràs en una gran història d'herois." parrafo2 = "Trobaràs dos botons que et permetran avançar i retrocedir en la història. Posa't còmode i gaudeix."></LandingPage>
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
