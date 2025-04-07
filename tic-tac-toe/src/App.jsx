import { useState } from 'react'
import './App.css'

// 승자 결정하기 부터
function Square({value,onSquareClcik}){
  return <button className='squre' onClick={onSquareClcik}>{value}</button>

}

export default function Board() {
  const [xIsNext,setIsNext] = useState(true);
  const [squares,setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    if(squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    }
    else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setIsNext(!xIsNext);
  }
  
  return(
    <>
    <div className='borad-row'>
      <Square value={squares[0]} onSquareClcik={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClcik={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClcik={() => handleClick(2)} />
    </div>
    <div className='borad-row'>
      <Square value={squares[3]} onSquareClcik={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClcik={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClcik={() => handleClick(5)} />
    </div>
    <div className='borad-row'>
      <Square value={squares[6]} onSquareClcik={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClcik={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClcik={() => handleClick(8)} />
    </div>
    </>
  )
}

