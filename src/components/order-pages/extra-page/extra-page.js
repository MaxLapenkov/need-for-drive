import React, { useState } from 'react'
import BurgerMenu from '../../burger-menu';
import Header from '../../header';
import Navigation from '../navigation';
import { links, cars } from '../../../services'
import { Link } from 'react-router-dom'
import '../order-page.scss'
import './extra-page.scss'

const Model = ({car, activeModel, setModel, index}) => {
    const modelClass = activeModel ? "model-page__model model-page__model--active" : "model-page__model";
        return (
            <div className={modelClass} onClick={() => setModel(index)}>
                <h2 className="model-page__model-header">{car.name}</h2>
                <p className="model-page__model-price">{car.priceMin} - {car.priceMax}</p>
                <img className="model-page__model-image" src={car.thumbnail} alt="Иконка машины"/>
            </div>
        )
}

const ModelPage = () => {
    const [nextPage, setNextPage] = useState(false);
    const [activeModel, setActiveModel] = useState(null);
    const unclokedIndexes = nextPage ? [0, 2] : [0];
    const buttonClass = nextPage ? 'button order-page__button' : 'button button--disabled order-page__button'



    return (
        <section className="model-page order-page">
            <h1 className="visually-hidden">Станица заказа - выбор модели</h1>
            <BurgerMenu/>
                <div className="order-page__wrapper">
                    <div className="order-page__container">
                        <Header/>
                    </div>
                    <Navigation activeIndex={1} unlockedIndexes={unclokedIndexes} links={links}/>
                    <div className=" order-page__container order-page__content">
                        <div className="order-page__left-container">
                            <div className="order-page__settings">
                                <div className="order-page__radio">
                                    <input type="radio" className="order-page__custom-radio" id="all" name="radio" value="all"/>
                                    <label htmlFor="all">Все модели</label>
                                </div>
                                <div className="order-page__radio">
                                    <input type="radio" className="order-page__custom-radio" id="eco" name="radio" value="eco"/>
                                    <label htmlFor="eco">Эконом</label>
                                </div>
                                <div className="order-page__radio">
                                    <input type="radio" className="order-page__custom-radio" id="prem" name="radio" value="prem"/>
                                    <label htmlFor="prem">Премиум</label>
                                </div>
                            </div>
                            <div className="model-page__model-container">
                            {           
                                cars.map((car, i) => (
                                    <Model key={i} car={car} activeModel={activeModel === i} setModel={(i) => {setActiveModel(i); setNextPage(true)}} index={i}/>
                                ))
                            }
                            </div>
                        </div>
                        <div className="order-page__right-container">
                            <div className="order-page__info">
                                <div className="order-page__info-title">Пункт выдачи</div>
                                <div className="order-page__info-dash"></div>
                                <div className="order-page__info-value">Ульяновск Нариманова 42</div>
                            </div>
                            <div className="order-page__info">
                                <div className="order-page__info-title">Модель</div>
                                <div className="order-page__info-dash"></div>
                                <div className="order-page__info-value">Hyndai, i30 N</div>
                            </div>
                            <div className="order-page__price">
                                <span className="order-page__price-header">Цена: </span>
                                от <span className="order-page__price-from"> 10000 </span>
                                до <span className="order-page__price-to"> 32 000 &#8381;</span>
                            </div>
                            <Link to="/order/addition" className={buttonClass}>Дополнительно</Link>
                        </div>
                    </div>
                    <footer className="order-page__footer"></footer>        
                </div> 
        </section>
    )
}

export default ModelPage