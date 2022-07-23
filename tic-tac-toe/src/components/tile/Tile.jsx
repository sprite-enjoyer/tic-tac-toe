import { useState } from "react";
import cn from "classnames";
import "./tile.scss";

const Tile = ({ notifyParent, index }) => {
    let [clicked, setClicked] = useState();
    let [playerSign, setPlayerSign] = useState();

    const onClickHandler = () => {
        if(clicked) return;
        setClicked(true);
        const callbackResult = notifyParent(index);
        setPlayerSign(callbackResult);
    };

    return (
        <div className="tile__wrapper">
            <div 
            onClick={onClickHandler}
            className={cn("tile__div", playerSign)}
            />
        </div>
    );
};

export default Tile;