import React, { useState, useEffect } from "react";
import Word from "./word.jsx";
import Img from "./img.jsx";
import DarkModeToggle from "./darkmode.jsx";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hanged = () => {
    const diccionario = ["fruta", "coche", "pez", "tortuga", "guacamole", "perro", "gato", "tigre", "piano", "mesa", "silla", "lápiz", "llave", "botón", "zapato", "hoja", "arroz", "avión", "cable", "luz", "luna", "mango", "manzana", "pelota", "techo", "fuego", "flor", "rana", "huevo", "globo", "palma", "piña", "rana", "vela", "viento", "vapor", "papel", "parra", "torta", "trono", "cabra", "gacela", "grulla", "iguana", "jirafa", "koala", "león", "murciélago", "nutria", "ocelote", "oso", "pantera", "quokka", "renacuajo"];
    const [palabra, setPalabra] = useState(randomWord());
    const [letras, setLetras] = useState({});
    const [intentos, setIntentos] = useState(0);
    const [hasGanado, setHasGanado] = useState(false);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        if (hasGanado || intentos >= 10) {
            if (hasGanado) {
                alert("¡Has ganado!");
            } else {
                alert("¡Has perdido!");
            }
            reiniciarJuego();
        }
    }, [hasGanado, intentos]);

    useEffect(() => {
        if (!mostrarPalabra().includes("_")) {
            setHasGanado(true);
        }
    }, [letras, palabra]);

    function randomWord() {
        const randomIndex = Math.floor(Math.random() * diccionario.length);
        return diccionario[randomIndex];
    }

    function handleComprobarLetra(letra) {
        if (!letras[letra]) {
            setLetras(prevLetras => ({...prevLetras, [letra]: true}));
            if (!palabra.includes(letra)) {
                setIntentos(prevIntentos => prevIntentos + 1);
                setMensaje(`La letra ${letra.toUpperCase()} no está en la palabra.`);
            } else {
                const count = contarLetra(letra);
                setMensaje(`La letra ${letra.toUpperCase()} aparece ${count} ${count === 1 ? 'vez' : 'veces'} en la palabra.`);
            }
        }
    }

    function contarLetra(letra) {
        return palabra.split("").filter(char => char === letra).length;
    }

    function mostrarPalabra() {
        return palabra.split("").map(char => letras[char] ? char : "_").join(" ");
    }

    function reiniciarJuego() {
        const nuevaPalabra = randomWord();
        setPalabra(nuevaPalabra);
        setLetras({});
        setIntentos(0);
        setHasGanado(false);
    }

    return (
        <>
            <div className="container">
                <DarkModeToggle />
            </div>
            <div className="title">
                <h1 className="text-center p-3">AHORCADO</h1>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5 col-12">
                    <div className="img">
                        <Img intentos={intentos} />
                    </div>
                </div>
                <div className="col-lg-7 col-12">
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
                        <button key={index} onClick={() => handleComprobarLetra(letra)} className={letras[letra] ? "clicked" : ""} disabled={hasGanado}>
                            {letra.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Hanged;
