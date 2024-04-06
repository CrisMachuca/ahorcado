import React, { useState, useEffect } from "react";
import Word from "./word.jsx";
import Letters from "./letters.jsx";
import Img from "./img.jsx";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hanged = () => {
    let diccionario = ["fruta", "coche", "pez", "tortuga", "guacamole", "sol", "pan", "mesa", "casa", "flor", "agua", "perro", "gato", "plato", "arbol", "lapiz", "silla", "nieve", "hoja", "mano", "papel", "piedra", "cafe", "bomba", "rata", "tigre", "girasol", "libro", "martillo", "comida", "puerta", "fuego", "familia", "ventana", "estrella", "guitarra", "teclado", "cuchillo", "calcetin", "computadora", "pantalones", "elefante", "leopardo", "cocodrilo", "hamburguesa", "heladera", "television", "reloj", "lampara", "telefono", "unicornio", "mariposa", "pajarito"];
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

    function reiniciarJuego() {
        const nuevaPalabra = randomWord();
        setPalabra(nuevaPalabra);
        setLetras([]);
        setIntentos(0);
    }

    return (
        <>
            <h1 className="text-center p-3">AHORCADO</h1>
            <div className="container main">
                <div className="img">
                    <Img intentos={intentos} />
                </div>
                <div className="game">
                    <div className="container">
                        <div className="letter">
                            {Array.from("abcdefghijklmnopqrstuvwxyz").map((letra, index) => (
                                <button key={index} onClick={() => handleComprobarLetra(letra)}>{letra.toUpperCase()}</button>
                            ))}
                        </div>
                    </div>
                    <div className="container word">
                        <Word palabra={mostrarPalabra()} />
                    </div>
                    <div className="message">
                        <h2>{mensaje}</h2>
                        <Letters letras={letras} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hanged;


