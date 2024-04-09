import React from "react";

const PopUp = ({ hasGanado, reiniciarJuego }) => {
    return (
        <>
            {hasGanado ? (
                <div className="popup">
                    <div className="popup-content">
                        <h2>¡Felicidades! Has ganado.</h2>
                        <button onClick={reiniciarJuego}>Jugar de nuevo</button>
                    </div>
                </div>
            ) : (
                <div className="popup">
                    <div className="popup-content">
                        <h2>¡Has perdido!</h2>
                        <button onClick={reiniciarJuego}>Jugar de nuevo</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopUp;