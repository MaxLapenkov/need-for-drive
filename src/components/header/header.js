import React from 'react';
import './header.scss'
import { IconLocation } from '../../assets/icons';

const Header = () => {
    return (
        <header className="start-screen__header header">
                <div className="header__logo">Need for Drive</div>
                <div className="header__location">
                    <IconLocation/>
                <span className="header__city">Ульяновск</span> 
                </div>
            </header>
    )
}
export default Header