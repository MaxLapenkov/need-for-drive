import React from 'react';
import './burger-menu.scss';

const BurgerMenu = () => {
    return (
        <div className="burger-menu container">
            <button className="burger-menu__button" aria-label="menu button">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 16H28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 8H28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 24H28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <button className="burger-menu__lang" aria-label="change language">Eng</button>
        </div>
    )
}
export default BurgerMenu;