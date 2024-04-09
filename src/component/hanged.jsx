import React, { useState, useEffect } from "react";
import Word from "./word.jsx";
import Img from "./img.jsx";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hanged = () => {
    let diccionario = ["fruta", "coche", "pez", "tortuga", "guacamole", "perro","perro", "gato", "tigre", "piano", "mesa", "silla", "lápiz", "llave", "botón", "zapato", "hoja", "arroz", "avión", "cable", "luz", "luna", "mango", "manzana", "pelota", "techo", "fuego", "flor", "rana", "huevo", "globo", "palma", "piña", "rana", "vela", "viento", "vapor", "papel", "parra", "torta", "trono", "cabra", "gacela", "grulla", "iguana", "jirafa", "koala", "león", "murciélago", "nutria", "ocelote", "oso", "pantera", "quokka", "renacuajo"];
    const [palabra, setPalabra] = useState(randomWord());
    const [letras, setLetras] = useState([]);
    const [intentos, setIntentos] = useState(0);
    const [hasGanado, setHasGanado] = useState(false);
    const [mensaje, setMensaje] = useState("");
    

    useEffect(() => {
        if (hasGanado) {
            const nuevaPalabra = randomWord();
            setPalabra(nuevaPalabra);
            setLetras([]);
            setIntentos(0);
            alert("¡Has ganado!");
            setHasGanado(false);
        } else if (intentos >= 10) {
            alert("¡Has perdido!");
            reiniciarJuego();
        }
    }, [hasGanado, intentos]);

    useEffect(() => {
        if (!mostrarPalabra().includes("_")) {
            setHasGanado(true);
        }
    }, [letras, palabra]);

    function randomWord() {
        let randomIndex = Math.floor(Math.random() * diccionario.length);
        return diccionario[randomIndex];
    }

    function handleComprobarLetra(letra) {
        if (!letras.includes(letra)) {
            setLetras([...letras, letra]);
            if (!palabra.includes(letra)) {
                setIntentos(intentos + 1);
                setMensaje(`La letra ${letra.toUpperCase()} no está en la palabra.`);
                
            } else {
                const count = (palabra.match(new RegExp(letra, "g")) || []).length;
                setMensaje(`La letra ${letra.toUpperCase()} aparece ${count} ${count === 1 ? 'vez' : 'veces'} en la palabra.`);}
        }

        if (!mostrarPalabra().includes("_")) {
            setHasGanado(true);
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

    function changeColor(button) {
        
        button.classList.add('clicked'); 
      }

    function reiniciarJuego() {
        const nuevaPalabra = randomWord();
        setPalabra(nuevaPalabra);
        setLetras([]);
        setIntentos(0);
    }

    return (
        <>
            <div className="title">
                <h1 className="text-center p-3" style={{fontFamily:'Permanent Marker', fontSize: "3rem",textShadow: "0 0 10px #00ff00, 0 0 10px #00ff00, 0 0 10px #00ff00"}}>AHORCADO</h1>
            </div>

            <div class="row d-flex justify-content-center">
                <div class="col-lg-5 col-12">
                    <div className="img">
                        <Img intentos={intentos} />
                    </div>
                    
                </div>
    
                <div class="col-lg-7 col-12">
                    <div className="word">
                        <Word palabra={mostrarPalabra()} />
                    </div>  
                </div>
            </div>
            
            
            
            <div className="container main">
                
                <div className="message">
                    <h2>{mensaje}</h2>
                    
                </div>
                 
                <div className="letter">
                    {Array.from("abcdefghijklmnopqrstuvwxyz").map((letra, index) => (
                                <button key={index} onClick={(event) => { handleComprobarLetra(letra); changeColor(event.target); }}>
                                {letra.toUpperCase()}
                              </button>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Hanged;