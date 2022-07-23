import Tile from "../tile/Tile";
import "./gameboard.scss";

const GameBoard = ({ notifyParent }) => {
    const keyArr = [];
    for(let i = 0; i < 9; i++) keyArr.push(i);

    return (
        <div className="gameboard-div">
            {keyArr.map(element => 
            <Tile notifyParent={notifyParent} 
            key={element} index={element} />) }
        </div>
    );
};

export default GameBoard;