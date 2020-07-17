import React, { useState } from 'react'
import BurgerMenu from '../../burger-menu';
import Header from '../../header';
import Navigation from '../navigation';
import { OrderCross } from '../../../assets/icons';
import { links } from '../../../services'
import { Link } from 'react-router-dom'
import '../order-page.scss'
import './model-page.scss'

import map from '../../../assets/images/map.png';

const ModelPage = () => {

    const [nextPage, setNextPage] = useState(true);
    const unclokedIndexes = nextPage ? [0, 2] : [0];
    const buttonClass = nextPage ? 'button order-page__button' : 'button button--disabled order-page__button'


    return (
        <section className="map-page order-page">
            <h1 className="visually-hidden">Станица заказа - выбор пункта выдачи</h1>
            <BurgerMenu/>
                <div className="order-page__wrapper">
                    <div className="order-page__container">
                        <Header/>
                    </div>
                    <Navigation activeIndex={1} unlockedIndexes={unclokedIndexes} links={links}/>
                    <div className=" order-page__container order-page__content">
                        <div className="order-page__left-container">
                            
                        </div>
                        <div className="order-page__right-container">
                            <div className="order-page__location">
                                <div className="order-page__location-title">Пункт выдачи</div>
                                <div className="order-page__location-dash"></div>
                                <div className="order-page__location-value">Ульяновск Нариманова 42</div>
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

export default ModelPage