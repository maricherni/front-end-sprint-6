import styled from "styled-components"; //para importar el módulo
import { createGlobalStyle } from "styled-components";

//Botones
export const Botones = styled.div`
    padding: 1rem 0 1rem 0;
    text-align: center;
    font-size: 1.2rem;
`;
//Texto inactivo
export const BordesTexto = styled.div`
    border: solid black 1px;
    background-color: white;
    opacity: 55%;
    border-radius: 50px;
    text-align: center;
    margin: 1rem;
`;
//Texto activo
export const ActiveText = styled.div`
    border: solid black 1px;
    border-radius: 50px;
    text-align: center;
    margin: 1rem;
    background-color: pink;
`;
//Centrar elementos
export const Center = styled.div`
    text-align: center;
    padding: 10px; 
    background-color: white;
    opacity: 75%;
`;
//Fondo de pantalla
export const GlobalStyle = createGlobalStyle`
body{
    background-image: url(${props => (props.image)}); //Pasamos por props la imagen que queremos que se muestre de fondo, de esta manera podemos añadir una función.
    background-size: 100%;
}
`;

