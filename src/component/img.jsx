import React from "react";


const Img = ({ intentos }) => {
    // partes del ahorcado mostrar según el número de intentos
    const partesAhorcado = [];
    for (let i = 0; i < intentos; i++) {
      switch (i) {
        case 0:
          partesAhorcado.push(<div className="vertical" key={i}></div>);
          break;
        case 1:
          partesAhorcado.push(<div className="horizontal" key={i}></div>);
          break;
        case 2:
          partesAhorcado.push(<div className="diagonal" key={i}></div>);
          break;
        case 3:
          partesAhorcado.push(<div className="rope" key={i}></div>);
          break;
        case 4:
          partesAhorcado.push(<div className="head" key={i}></div>);
          break;
        case 5:
          partesAhorcado.push(<div className="body" key={i}></div>);
          break;
        case 6:
          partesAhorcado.push(<div className="left-arm" key={i}></div>);
          break;
        case 7:
          partesAhorcado.push(<div className="right-arm" key={i}></div>);
          break;
        case 8:
          partesAhorcado.push(<div className="left-leg" key={i}></div>);
          break;
        case 9:
          partesAhorcado.push(<div className="right-leg" key={i}></div>);
          break;
        default:
          break;
      }
    }
  
    return (

        <div class="hangman">
            <div class="gallows">
                {partesAhorcado}
            </div>
        </div>

    );
  };
  
  export default Img;