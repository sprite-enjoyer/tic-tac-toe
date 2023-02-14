import { makeObservable, observable } from "mobx";
import { Player } from "./TicTacToeStore";

export class ScoreStore {

  player1: number = 0;
  player2: number = 0;
  winner: Player | undefined;

  constructor() {
    makeObservable(this, {
      player1: observable,
      player2: observable,
      winner: observable,
    });
  }

  playerWon(player: Player | "TIE" | undefined) {
    if (!player || player === "TIE") return;
    if (player === "X") this.player1++;
    else this.player2++;
  }

}