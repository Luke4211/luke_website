/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import HomeIcon from '../../assets/home.png';
import SearchIcon from '../../assets/search.png';
import './BottomBar.css';

const iconClick = (url) => { window.location = url; };

function BottomBar() {
  return (
    <div className="icon_container">

      <div className="icons">
        <img className="icon" src={HomeIcon} alt="Home" onClick={iconClick} onKeyDown={iconClick} />
        <img className="icon" src={SearchIcon} alt="Home" onClick={iconClick} onKeyDown={iconClick} />

        {/*
        TODO: Remove ESLint bypass from top of file and transition to using buttons
        <button type="button" className="home_button" onClick={iconClick}
        onKeyDown={iconClick}> Home </button>
        <button type="button" className="search_button" onClick={iconClick}
        onKeyDown={iconClick}> Search </button>
        */}

      </div>
    </div>
  );
}

export default BottomBar;
