import "./game-over-screen.scss";
import App from "../../App";
import { useState } from "react";
const GameOverScreen = ({ message }) => {
    let [clicked, setClicked] = useState(false);

    const onClickHandler = () => setClicked(true);

    return ( clicked ? <App /> :
        <div className="game-over-div">
            <h1>{ message }</h1>
            <button className = "btn" onClick={onClickHandler}>Play Again</button>
        </div>
    );
};

export default GameOverScreen;