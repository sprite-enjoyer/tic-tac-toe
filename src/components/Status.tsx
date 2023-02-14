import styles from "../styles/status.module.scss";
import { Player, TicTacToeStore } from "../stores/TicTacToeStore";
import { ScoreStore } from "../stores/ScoreStore";
import { observer } from "mobx-react";

export interface StatusProps {
  winner: Player | undefined,
  scoreStore: ScoreStore,
  store: TicTacToeStore
}


const Status = ({ winner, scoreStore, store }: StatusProps) => {



  return (
    <div className={styles["main"]} >
      <span className={styles["main__playerName"]} >Player X: {scoreStore.player1} </span>
      <span className={styles["main__playerName"]}>Player O: {scoreStore.player2}</span>
      <button onClick={() => store.playAgain()} className={styles["main__btn"]} >
        Play Again
      </button>
    </div>
  );
};


export default observer(Status);