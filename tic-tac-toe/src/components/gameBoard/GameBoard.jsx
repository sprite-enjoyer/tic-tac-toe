import Tile from "../tile/Tile";
import { v4 } from "uuid";

const GameBoard = ({ notifyParent }) => {
    
    const keyArr = [];
    for(let i = 0; i < 9; i++) keyArr.push([v4(), i]);

    return(
        <div className="gameBoard-div">

            { keyArr.map(element => 
            <Tile notifyParent={notifyParent} 
            key={element[0]} index={element[1]} />) }

        </div>
    );
}

export default GameBoard;