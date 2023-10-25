import { useState } from 'react'
import './App.css'

const TURN = {
  PLAYER1: 'X',
  PLAYER2: 'O',
}

const Board = Array(9).fill(null)




const Cell = ({index, board, turn, winner, handleClick}) => {
  const cellValue = board[index];
  const turnClassName = cellValue === TURN.PLAYER1 ? 'player1' : cellValue === TURN.PLAYER2 ? 'player2' : '';
  const isWinner = board[index] === winner; // Verificar si es una celda ganadora
  const className = `cell ${turnClassName} ${isWinner ? 'ganador' : ''}`;
  return (
    <div className={className} onClick={() => handleClick(index)}>
      {cellValue}
    </div>
  )
}


function App() {
  const [points, setPoints] = useState({
    [TURN.PLAYER1]: 0, 
    [TURN.PLAYER2]: 0,
  })
  const [turn, setTurn] = useState(TURN.PLAYER1)
  const [board, setBoard] = useState(Board)
  const [winner, setWinner] = useState(null)

  const handleClick = (index) => {
    if(board[index] !== null || winner != null) return
    const newBoard = [...board]
    newBoard[index] = turn
    //Se le pasa el new Board ya que es el actualizado
    setBoard(newBoard)
    setTurn(turn === TURN.PLAYER1 ? TURN.PLAYER2 : TURN.PLAYER1)
    checkWinner(newBoard)
    if(!newBoard.includes(null) && winner==null) setWinner('Empate')
  }

  const reset = () => {
    setWinner(null)
    setBoard(Array(9).fill(null))
    setTurn(TURN.PLAYER1)
  }

  const checkWinner = (newBoard) => {
    const WINNER_COMBOS = [
      [0,1,2], [3,4,5], [6,7,8], // Horizontal
      [0,3,6], [1,4,7], [2,5,8], // Vertical
      [0,4,8], [2,4,6] // Diagonal
    ]
    const board = newBoard
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a])
        setPoints({
          ...points,
          [board[a]]: points[board[a]] + 1
        })
        return
      }
    }
  }  

  return(
    <main className="board">
      <h1>TA TE TI</h1>
      <div className="score">
        <span className="player1">Player 1: {points[TURN.PLAYER1]}</span>
        <span className="player2">Player 2: {points[TURN.PLAYER2]}</span>
      </div>
      <section className='game'>
        {Board.map((cell, index) => (
          <Cell key={index} index={index} turn={turn} board={board} winner={winner} handleClick={handleClick}/>
        ))}
      </section>
      <h2>{winner ? `Ganador: ${winner}` : `Turno: ${turn}`}</h2>
      <div className={winner?'play-again':'play-again hidden'} onClick={reset}>Volver a jugar</div>
    </main>
  )
}

export default App
