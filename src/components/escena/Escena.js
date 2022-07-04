import React from "react";
import App from "../../App";
import { BordesTexto, Botones, ActiveText} from './Styled';

//Botones anterior & següent
export const Boton = (props) =>   
  <Botones><div>{props.textoBoton}</div></Botones>

//Texto historia. Si la propiedad "active" es "true" se pondrá de color rosa y si es "false" se quedará blanco.
export function Escena (props) {
  const [active, setActive] = React.useState(props.active);
  return (
    active?<div> <ActiveText><p>{props.texto}</p></ActiveText></div> : <div><BordesTexto><p>{props.texto}</p></BordesTexto></div> 
  )
  }

