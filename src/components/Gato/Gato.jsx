import React, { useState, useEffect } from "react";
import "./Gato.scss";
import Square from "../Square";
import { combinacionGanadora } from "./CombinacionesGanadoras";

const Gato = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkTie();
    checkWin();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished, Winning Player: ${result.winner}.`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        } else {
          return val;
        }
      })
    );
  };

  const checkWin = () => {
    combinacionGanadora.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currentPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
        restartGame();
      }
    });
  };
  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };
  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <div className="app__wrapper">
      <h1 className="first__tittle">Welcome to my Tic-tac-toe!</h1>
      <div className="players__container">
        <span className={player === "X" ? "border" : null}>Player X</span>
        <span className={player === "O" ? "border" : null}>Player O</span>
      </div>
      <div className="game__container">
        <Square
          data-index="0"
          val={board[0]}
          chooseSquare={() => chooseSquare(0)}
        ></Square>
        <Square
          data-index="1"
          val={board[1]}
          chooseSquare={() => chooseSquare(1)}
        ></Square>
        <Square
          data-index="2"
          val={board[2]}
          chooseSquare={() => chooseSquare(2)}
        ></Square>
        <Square
          data-index="3"
          val={board[3]}
          chooseSquare={() => chooseSquare(3)}
        ></Square>
        <Square
          data-index="4"
          val={board[4]}
          chooseSquare={() => chooseSquare(4)}
        ></Square>
        <Square
          data-index="5"
          val={board[5]}
          chooseSquare={() => chooseSquare(5)}
        ></Square>
        <Square
          data-index="6"
          val={board[6]}
          chooseSquare={() => chooseSquare(6)}
        ></Square>
        <Square
          data-index="7"
          val={board[7]}
          chooseSquare={() => chooseSquare(7)}
        ></Square>
        <Square
          data-index="8"
          val={board[8]}
          chooseSquare={() => chooseSquare(8)}
        ></Square>
      </div>
      {/* <h2>Winning player: {result.winner}</h2> */}
      <button
        className="btn-reset"
        onClick={(e) => {
          setBoard(["", "", "", "", "", "", "", "", ""]);
          setPlayer("O");
        }}
      >
        Reset game
      </button>
    </div>
  );
};

export default Gato;
