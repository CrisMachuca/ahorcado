import React, { useState} from "react";
import Input from "./input.jsx";
import Word from "./word.jsx";
import Letters from "./letters.jsx";
import Img from "./img.jsx";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hanged = () => {
    let diccionario = ["fruta", "coche", "pez", "tortuga", "guacamole"];
    const [palabra, setPalabra] = useState(randomWord());
    const [letras, setLetras] = useState([]);
    const [intentos, setIntentos] = useState(0);  
    
    

function randomWord() {
    let randomIndex = Math.floor(Math.random() * diccionario.length);
    return diccionario[randomIndex];
}


function handleComprobarLetra() {
    
    const nuevaLetra = document.getElementById("letra").value;
    if (nuevaLetra && !letras.includes(nuevaLetra)) {
      setLetras([...letras, nuevaLetra]);
      if (!palabra.includes(nuevaLetra)) {
        setIntentos(intentos + 1);
      }
    }
  }

  function mostrarPalabra() {
    return palabra
      .split("")
      .map((letra, index) =>
        letras.includes(letra) ? letra : "_"
      )
      .join(" ");
  }



    return (
        <>
        <h1 className="text-center p-3">AHORCADO</h1>
      <div className="container main">
        <div className="img">
          <Img intentos={intentos} />
        </div>
        <div className="game">
          <div className="container letter">
            <Input />
            <button onClick={handleComprobarLetra}>Comprobar letra</button>
          </div>
          <div className="container word">
            <Word palabra={mostrarPalabra()} />
          </div>
          <div className="message">
            <h2>mensaje</h2>
            <Letters letras={letras} />
          </div>
        </div>
      </div>
    </>
    )
}

export default Hanged;


