import React, { useState } from 'react';
import './burger-menu.scss';

import { BurgerOpened, BurgerClosed, Telegram, Facebook, Instagram } from '../../assets/icons';
import { burgerMenuItems } from '../../constants';

const MenuItem = ({ item }) => {
    return (
        <li className="burger-menu__item">{item}</li>
    )
}

const BurgerMenu = ( {substrate} ) => {
    const toggleMenu = (status) => {
        setmenuTriggered(true);
        if(status === true) {
            setMenuOpened(false);
        } else {
            setMenuOpened(true)
        }
    }
    const [menuOpened, setMenuOpened] = useState(false);
    const [menuTriggered, setmenuTriggered] = useState(false);
    const burgerMenuClass = menuOpened ? 'burger-menu__opened': 'burger-menu__closed';

    let burgerIconClass = 'burger-menu__icon burger-menu__icon--burger-mobile';
    let burgerCrossIconClass = 'burger-menu__icon--hidden';

    const substrateClass = substrate ? 'burger-menu__substrate' : '';

    if(menuOpened && menuTriggered) {
        burgerIconClass = 'burger-menu__icon burger-menu__icon--closed'
        burgerCrossIconClass = 'burger-menu__icon burger-menu__icon--opened'
    } else if(!menuOpened && menuTriggered) {
        burgerIconClass = 'burger-menu__icon burger-menu__icon--opened burger-menu__icon--burger-mobile'
        burgerCrossIconClass = 'burger-menu__icon burger-menu__icon--closed'
    }

        return (
            <div className="burger-menu container">
                <button onClick={() => toggleMenu(menuOpened)} className="burger-menu__button" aria-label="menu button">
                    <BurgerClosed classes={burgerCrossIconClass}/>
                    <BurgerOpened classes={burgerIconClass}/>
                </button>
                <button className="burger-menu__lang" aria-label="change language">Eng</button>
                <div className={burgerMenuClass}>
                    <menu className="burger-menu__info">
                        <ul className="burger-menu__list">
                            {           
                                burgerMenuItems.map((item) => (
                                    <MenuItem key={item} item={item}/>
                                ))
                            }
                        </ul>
                        <div className="burger-menu__social">
                            <a href="https://telegram.org/" className="burger-menu__link">
                                <Telegram/>
                            </a>
                            <a href="https://ru-ru.facebook.com/" className="burger-menu__link">
                                <Facebook/>
                            </a>
                            <a href="https://www.instagram.com/" className="burger-menu__link">
                                <Instagram/>
                            </a>
                        </div>
                    </menu>
                    <div className={substrateClass}>
                    </div>
                </div>
            </div>
        )
}
export default BurgerMenu;