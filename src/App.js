import logo from './logo.svg';
import './App.css';
import Escena from "./components/escena/Escena";
import { textos } from './components/escena/Textos';


function App() {
  return (
   <div>
    <Escena frase = {textos[0]}/>
    <Escena frase = {textos[1]}/>
    <Escena frase = {textos[2]}/>
    <Escena frase = {textos[3]}/>
    
   </div> 
   
  )
};

export default App;
