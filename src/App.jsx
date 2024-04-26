import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState([Array(9).fill(null)]);

  function handClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handClick(2)} />
      </div>

      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handClick(5)} />
      </div>

      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handClick(8)} />
      </div>
    </>
  );
}
