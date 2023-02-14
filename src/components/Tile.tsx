import { observer } from "mobx-react";
import styles from "../styles/tile.module.scss";
import { TicTacToeStore } from "../stores/TicTacToeStore";
import { CellData } from "../stores/TicTacToeStore";

export interface TileProps {
  id: number,
  store: TicTacToeStore,
  data: CellData
}

function chooseCn(data: CellData) {
  switch (data) {
    case "O": return styles["main__o"];
    case "X": return styles["main__x"];
    default: return undefined;
  }
}

const Tile = ({ id, store, data }: TileProps) => {

  const column = id % 3;
  const row = Math.floor(id / 3);

  const onClickHandler = () => store.makeMove(row, column);

  return (
    <div onClick={onClickHandler} className={styles["main"]} >
      <div className={chooseCn(data)} />
    </div>
  )
}

export default observer(Tile);