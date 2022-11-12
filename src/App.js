import logoCargado from './logo.svg';
import './App.css';
//importar la funcion componente
import Home from "./components/home";
//Cargar el navbar
import Navbar from  "./components/navbar";

function App() {

  //Crear un obejto CSS
  let objCss = {
    border: "3px dotted red"
  }
  return (
    <div>
        <Navbar/>
        <Home logo = {logoCargado}/>
        <div style={objCss}>
          <h2>Hola probando objeto CSS</h2>
        </div>
    </div>
  );
}

export default App;
