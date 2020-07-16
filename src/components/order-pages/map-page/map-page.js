import React from 'react'
import BurgerMenu from '../../burger-menu';
import Header from '../../header';
import Navigation from '../navigation'
import './map-page.scss'

const MapPage = () => {
    const links = [
        {link: 'Местоположение', address: '/order/map'},
        {link: 'Модель', address: '/order/model'},
        {link: 'Дополнительно', address: '/order/addition'},
        {link: 'Дополнительно', address: '/order/final'},
    ]
    return (
        <section className="map-page">
            <BurgerMenu/>
                <div className="order-page__wrapper">
                    <div className="map-page__content order-page__container">
                        <Header/>
                    </div>
                    <Navigation activeIndex={0} unlockedIndexes={[1]} links={links}/>
                    <div className="map-page__content order-page__container">
                        <Header/>
                    </div>
                </div>
        </section>
    )
}

export default MapPage