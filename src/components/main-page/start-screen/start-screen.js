import React from 'react';
import './start-screen.scss'

const StartScreen = () => {
    return (
        <div className="start-screen container">
            <header className="start-screen__header header">
                <div className="header__logo">Need for Drive</div>
                <div className="header__location">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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