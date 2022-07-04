import React from "react";
import {Botones, Center, FormatoLinea} from './Styled';

//PÁGINA INICIAL
  export const LandingPage = (props) => 
  <Center>
    <h1>{props.titulo}</h1>
    <p>{props.parrafo1}</p>
    <p>{props.parrafo2}</p>
  </Center>

//PÁGINA HISTORIA
  //Botones "començar història", "anterior" & "següent"
  export const Boton = (props) =>   
    <Botones><div>{props.textoBoton}</div></Botones>

  //Texto historia. Aparecen todas las líneas de texto y a la línea que esté activa (que coincida con el índice del Array) se le pondrá el fondo de color rosa y el resto se quedará blanco.
    export const Escena = ({ textoActivo , txt}) => <FormatoLinea textoActivo={textoActivo}>{txt}</FormatoLinea>



