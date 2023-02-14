import { action, computed, makeObservable, observable } from "mobx";
import { ScoreStore } from "./ScoreStore";

export type Player = "X" | "O";
export type CellData = Player | undefined;

export class TicTacToeStore {

  gameBoard: CellData[][] = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ];

  winner: Player | "TIE" | undefined;
  isTheGameOVer: boolean = false;
  itIsXsTurn: boolean = true;
  scoreStore: ScoreStore;

  constructor(scoreStore: ScoreStore) {
    makeObservable(this, {
      gameBoard: observable,
      isTheGameOVer: observable,
      itIsXsTurn: observable,
      winner: observable,
      checkWin: action,
      makeMove: action,
      playAgain: action,
    });
    this.scoreStore = scoreStore;
  }

  makeMove(x: number, y: number) {
    if (this.winner) return;
    const player: Player = this.itIsXsTurn ? "X" : "O"

    if (this.gameBoard[x][y]) return;
    this.gameBoard[x][y] = player;

    const didWin = this.checkWin(player, x, y);
    if (didWin) {
      this.winner = player;
      this.scoreStore.playerWon(player);
      return;
    }

    const flat = this.gameBoard.flat();
    const TIE = flat.reduceRight((acc, curr) => acc && curr);
    if (TIE) this.winner = "TIE";
    if (this.winner) this.isTheGameOVer = true;
    if (!this.winner) this.itIsXsTurn = !this.itIsXsTurn;
  }

  checkWin(player: Player, x: number, y: number) {

    if (this.gameBoard[x][0] === player && this.gameBoard[x][1] === player && this.gameBoard[x][2] === player) {
      return true;
    }
    if (this.gameBoard[0][y] === player && this.gameBoard[1][y] === player && this.gameBoard[2][y] === player) {
      return true;
    }

    if (this.gameBoard[0][0] === player && this.gameBoard[1][1] === player && this.gameBoard[2][2] === player) {
      return true;
    }
    if (this.gameBoard[2][0] === player && this.gameBoard[1][1] === player && this.gameBoard[0][2] === player) {
      return true
    }

    return false;
  }

  playAgain() {
    this.gameBoard = [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ];
    this.itIsXsTurn = true;
    this.isTheGameOVer = false;
    this.winner = undefined;
  }

}