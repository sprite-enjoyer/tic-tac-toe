import GameBoard from "./components/gameBoard/GameBoard";
import { useState } from "react";
import "./app.scss";
import didWin from "./game_logic/didWin";
import GameOverScreen from "./components/gameOverScreen/GameOverScreen";
import isDraw from "./game_logic/isDraw";

function App() {
  const [rowArr, setRowArr] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  const [xState, setXState] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const generateMessage = () => {
    if (isDraw(rowArr)) return ("Game Over, it's a draw!");
    if (!xState) return ("Game Over, red won!");
    return ("Game Over, green won!");
  }

  const modifyArr = (index) => {
    const rowIndex = Math.floor(index/3);
    const colIndex = index % 3;
    const rowArrCopy = [...rowArr];
    rowArrCopy[rowIndex][colIndex] = xState ?  1 : -1;
    setRowArr(rowArrCopy);
  };

  const notifyParent = (index) => {
    modifyArr(index);
    if (isDraw(rowArr)) setGameOver(true);
    if (didWin(rowArr, xState)) setGameOver(true);
    setXState(prev => !prev);
    return ( xState ? "x-div" : "o-div" );
  };

  return ( gameOver ? <GameOverScreen message={generateMessage()} /> :
    <div className="App">
      <GameBoard 
        notifyParent={notifyParent} 
      />
    </div>
  );
}

export default App;
