import React from 'react';
import { TicTacToeStore } from './stores/TicTacToeStore';
import styles from "./styles/app.module.scss";
import GameBoard from './components/GameBoard';
import Status from './components/Status';
import { ScoreStore } from './stores/ScoreStore';

function App() {
  const scoreStore = new ScoreStore();
  const store = new TicTacToeStore(scoreStore);

  return (
    <div className={styles["main"]} >
      <div className={"main__content"} >
        <GameBoard store={store} />
        <Status winner={undefined} scoreStore={scoreStore} store={store} />
      </div>
    </div>
  );
}

export default App;
