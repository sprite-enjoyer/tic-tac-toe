import { useState } from "react";

const Tile = ({ notifyParent, index }) => {

    let [clicked, setClicked] = useState(false);
    let [playerSign, setPlayerSign] = useState();

    const onClickHandler = () => {
        setClicked(true);
        const callbackResult = notifyParent(index);
        setPlayerSign(callbackResult);
    }

    return(
        <div className="tile-wrapper">

            <div onClick={clicked ? null : onClickHandler} 
            className={"tile-div " + playerSign} >

            </div>
        </div>
    );
}

export default Tile;