import React, { useState } from 'react'
import BurgerMenu from '../../burger-menu';
import Header from '../../header';
import Navigation from '../navigation';
import { OrderCross } from '../../../assets/icons';
import { links } from '../../../services'
import { Link } from 'react-router-dom'
import '../order-page.scss'
import './map-page.scss'

import map from '../../../assets/images/map.png';

const MapPage = () => {
    const [city, setCity] = useState('');
    const [delivery, setDelivery] = useState('');
    const clearCity = city.length > 0 ? 'order-page__cross' : 'order-page__cross--hidden';
    const clearDelivery = delivery.length > 0 ? 'order-page__cross' : 'order-page__cross--hidden';

    const nextPage = true;
    const unclokedIndexes = nextPage ? [1] : [0];
    const buttonClass = nextPage ? 'button order-page__button' : 'button button--disabled order-page__button'


    return (
        <section className="map-page order-page">
            <h1 className="visually-hidden">Станица заказа - выбор пункта выдачи</h1>
            <BurgerMenu/>
                <div className="order-page__wrapper">
                    <div className="order-page__container">
                        <Header/>
                    </div>
                    <Navigation activeIndex={0} unlockedIndexes={unclokedIndexes} links={links}/>
                    <div className=" order-page__container order-page__content">
                        <div className="order-page__left-container">
                            <label className="order-page__label map-page__city">
                                Город
                                <input type="text" name="city" className="order-page__input" value={city} onChange={(e) => setCity(e.target.value)}></input>
                                <button className={clearCity} onClick={() => setCity('')}><OrderCross/></button>
                            </label>
                            <label className="order-page__label map-page__delivery">
                                Пункт выдачи
                                <input type="text" name="delivery" className="order-page__input" value={delivery} onChange={(e) => setDelivery(e.target.value)}></input>
                                <button className={clearDelivery} onClick={() => setDelivery('')}><OrderCross/></button>
                            </label>
                            <h2 className="map-page__heading">Выбрать на карте</h2>
                            <img className="map-page__map" src={map} alt="карта"></img>
                        </div>
                        <div className="order-page__right-container">
                            <div className="order-page__info">
                                <div className="order-page__info-title">Пункт выдачи</div>
                                <div className="order-page__info-dash"></div>
                                <div className="order-page__info-value">Ульяновск Нариманова 42</div>
                            </div>
                            <div className="order-page__price">
                                <span className="order-page__price-header">Цена: </span>
                                от <span className="order-page__price-from"> 8000 </span>
                                до <span className="order-page__price-to"> 12 000 &#8381;</span>
                            </div>
                            <Link to="/order/model" className={buttonClass}>Выбрать модель</Link>
                        </div>
                    </div>
                    <footer className="order-page__footer"></footer>        
                </div> 
        </section>
    )
}

export default MapPage