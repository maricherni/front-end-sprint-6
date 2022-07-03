import styled from "styled-components"; //para importar el módulo
import { createGlobalStyle } from "styled-components";

//Fondo de pantalla
export const GlobalStyle = createGlobalStyle`
body{
    background-image: url(${props => (props.image)}); //Pasamos por props la imagen que queremos que se muestre de fondo, de esta manera podemos añadir una función.
    background-size: 100%;
}
`;
//Botones
export const ContainerBotones = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;
export const Botones = styled.div`
    width: 100%;
    padding: 1.5rem 0 1.5rem 0;
    text-align: center;
    font-size: 1.2rem;
`;
//Texto historia. Cambio de color y opacidad de la línea según si está activa o no
export const FormatoLinea = styled.div`
    background-color: ${({ textoActivo }) => textoActivo ? 'pink' : 'white' };
    opacity: ${({ textoActivo }) => textoActivo ? '100%' : '55%' };
    padding: 1rem;
    border: solid black 1px;
    border-radius: 50px;
    text-align: center;
    margin: 1rem;
`;
//Centrar elementos
export const Center = styled.div`
    text-align: center;
    padding: 10px; 
    background-color: white;
    opacity: 75%;
`;




