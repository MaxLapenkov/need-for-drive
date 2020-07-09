import React from 'react';
import './main-page.scss';
import StartScreen from './start-screen';
import BurgerMenu from './burger-menu';

const MainPage = () => {
    return (
        <div className="main-page">
            <BurgerMenu/>
            <StartScreen/>
        </div>
    )
}

export default MainPage;