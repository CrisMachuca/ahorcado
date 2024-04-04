import React from "react";

const Letters = ({ letras }) => {
  return (
    <div>
      <p>Letras introducidas:</p>
      <ul>
        {letras.map((letra, index) => (
          <li key={index}>{letra}</li>
        ))}
      </ul>
    </div>
  );
};

export default Letters;