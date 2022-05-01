import React from "react";
import HomeIcon from "../../assets/home.png";
import SearchIcon from "../../assets/search.png"
import './BottomBar.css';

const BottomBar = () => {

    const iconClick = (url) => {
        return window.location = url;
    }
    return (
        <div className="icon_container">

            <div className="icons">
                <img className="icon" src={HomeIcon} alt="Home" onClick={iconClick} />
                <img className="icon" src={SearchIcon} alt="Home" onClick={iconClick} />
            </div>
        </div>
    )
}

export default BottomBar;