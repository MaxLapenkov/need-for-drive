import React from 'react';
import './start-screen.scss'
import { IconLocation } from '../../../assets/icons'

const StartScreen = () => {
    return (
        <div className="start-screen container">
            <header className="start-screen__header header">
                <div className="header__logo">Need for Drive</div>
                <div className="header__location">
                    <IconLocation/>
                <span className="header__city">Ульяновск</span> 
                </div>
            </header>
            <main className="start-screen__content content">
                <h1 className="content__header">Каршеринг</h1>
                <h2 className="content__name">Need for Drive</h2>
                <p className="content__desc">Поминутная аренда авто твоего города</p>
                <button className="content__button button">Забронировать</button>
            </main>
            <footer className="start-screen__footer footer">
                <p className="footer__copyright">© 2016-2019 «Need for drive»</p>
                <a className="footer__phone" href="tel:84952342244">8 (495) 234-22-44</a>
            </footer>
        </div>
    )
}
export default StartScreen;