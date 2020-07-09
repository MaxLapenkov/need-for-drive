import React from 'react';
import './slider.scss';


const Slider = () => {
    return (
        <div className="slider">
            <button className="slider__control slider__control-left">
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L1 10L9 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className="slider__wrapper">
                <div className="slider__item slider__item-first ">
                    <h3 className="slider__header">Бесплатная парковка</h3>
                    <p className="slider__info">Оставляйте машину на платных городских парковках
                    и разрешенных местах, не нарушая ПДД,
                    а также в аэропортах.</p> 
                    <button className="slider__button button">Подробнее</button>
                </div>
                <div className="slider__item slider__item-second hidden ">
                    <h3 className="slider__header">Страховка</h3>
                    <p className="slider__info">Полная страховка страховка автомобиля</p> 
                    <button className="slider__button button">Подробнее</button>
                </div>
                <div className="slider__item slider__item-third hidden">
                    <h3 className="slider__header">Бензин</h3>
                    <p className="slider__info">Полный бак на любой заправке города за наш счёт</p> 
                    <button className="slider__button button">Подробнее</button>
                </div>
                <div className="slider__item slider__item-fourth hidden">
                    <h3 className="slider__header">Обслуживание</h3>
                    <p className="slider__info">Автомобиль проходит еженедельное ТО</p> 
                    <button className="slider__button button">Подробнее</button>
                </div>
                <div className="slider__radio-controls">
                    <button className="slider__radio slider__radio--active"></button>
                    <button className="slider__radio"></button>
                    <button className="slider__radio"></button>
                    <button className="slider__radio"></button>
                </div>
            </div>
            <button className="slider__control slider__control-right">
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 10L1 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    )
}
export default Slider