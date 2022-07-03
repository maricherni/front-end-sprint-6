import './App.css';
import React from 'react';
import {ContainerBotones, GlobalStyle, Center} from './components/escena/Styled.js';
import {useState} from 'react';
import {Escena, Boton, LandingPage} from "./components/escena/Escena";
import {Frases} from './components/img/Frases';

function App() {
  
  //Establecer frase activa por defecto
  const [activeIndex, setActiveIndex] = useState(0);

  //Iterar sobre array de Frases y activar texto según el indice
  const frasesHistoria = Frases.map((frase, index) => (
    <div key={frase.txt}>
      <Escena textoActivo = {index === activeIndex} txt={frase.txt} />
    </div>
  ))

  //RENDERIZADO CONCIDIONAL. Para que aparezca una página de inicio antes de la historia.
  let [pagInicial, setPagInicial] = useState(true); 


  return (
  <div>
    <GlobalStyle image = {Frases[activeIndex].img}></GlobalStyle> {/* El fondo irá cambiando a medida que cambie el índice  */}
    
    {/* PÁGINA INICIAL */}
    {pagInicial && 
      <div>
        <LandingPage titulo = "Una història d'herois" parrafo1 = "A continuació t'endinsaràs en una gran història d'herois." parrafo2 = "Trobaràs dos botons que et permetran avançar i retrocedir en la història. Posa't còmode i gaudeix."></LandingPage>
        <Center><button onClick={()=> setPagInicial(pagInicial? pagInicial = false : pagInicial)}><Boton textoBoton = 'Començar història'/></button></Center>
      </div>
    } 
    {/* PÁGINA HISTORIA */}
    {!pagInicial &&
    <div className= 'prevNextButtons'>
      <ContainerBotones>
        <button onClick= {() => setActiveIndex(activeIndex > 0 ? activeIndex -1 : activeIndex)}><Boton textoBoton ='Anterior'></Boton></button>
        <button onClick= {() => setActiveIndex(activeIndex < Frases.length -1 ? activeIndex + 1 : activeIndex)}><Boton textoBoton = 'Següent'></Boton></button>
        </ContainerBotones>
    </div> 
    }
    {!pagInicial &&
     <div> {frasesHistoria} </div>
    }    
  </div> 
  )
  
};

export default App;