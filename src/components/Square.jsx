import React from "react";
import "./Gato/Gato.scss";

function Square({ val, chooseSquare }) {
  return (
    <div className={`box ${val}`} onClick={chooseSquare}>
      {val}
    </div>
  );
}

export default Square;
