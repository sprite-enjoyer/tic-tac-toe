import GameBoard from "./components/gameBoard/GameBoard";
import { useState } from "react";
function App() {

  const gameArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [xState, setXState] = useState(true);

  const notifyParent = (index) => {
    xState ? gameArr[index] = 1 : gameArr[index] = -1;
    setXState(prev => !prev);



    return( xState ? "x-div" : "o-div" );
  }

  return (
    <div className="App">
      <GameBoard notifyParent={notifyParent} />
    </div>
  );
}

export default App;
