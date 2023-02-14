import { TicTacToeStore } from "../stores/TicTacToeStore";
import styles from "../styles/gameBoard.module.scss";
import Tile from "./Tile";
import { observer } from "mobx-react";

interface GameBoardProps {
  store: TicTacToeStore
}

const GameBoard = ({ store }: GameBoardProps) => {

  return (
    <div className={styles["main"]} >
      <div className={styles["main__gameBoard"]} >
        {
          store.gameBoard
            .flatMap((cellDataArr) => cellDataArr)
            .map(
              (cellData, i) =>
                <Tile key={i} data={cellData} id={i} store={store} />
            )
        }
      </div>
    </div>
  )
};

export default observer(GameBoard);