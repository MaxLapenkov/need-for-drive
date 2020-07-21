import React, { useState } from 'react'
import BurgerMenu from '../../burger-menu';
import Header from '../../header';
import Navigation from '../navigation';
import { OrderCross } from '../../../assets/icons';
import { links, carColors, tarifs, additions } from '../../../constants'
import { Link } from 'react-router-dom'
import '../order-page.scss'
import './extra-page.scss'

const ColorRadio = ({color}) => {
    return (
        <div className="order-page__radio">
            <input type="radio" className="order-page__custom-radio" id={color.id} name="color" value={color.id}/>
            <label htmlFor={color.id}>{color.name}</label>
        </div>
    )
}

const Tarif = ({tarif}) => {
    return (
        <div className="order-page__radio extra-page__radio">
            <input type="radio" className="order-page__custom-radio" id={tarif.id} name="tarif" value={tarif.id}/>
            <label htmlFor={tarif.id}>{tarif.name}, {tarif.price}</label>
        </div>
    )
}
const Additions = ({addition}) => {
    return (
        <div className="order-page__checkbox extra-page__checkbox">
            <input type="checkbox" className="order-page__custom-checkbox" id={addition.id} name={addition.id} value={addition.id}/>
            <label htmlFor={addition.id}>{addition.name}, {addition.price}</label>
        </div>
    )
}

const ExtraPage = () => {

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const clearFrom = fromDate.length > 0 ? 'order-page__cross' : 'order-page__cross--hidden';
    const clearTo = toDate.length > 0 ? 'order-page__cross' : 'order-page__cross--hidden';

    const nextPage = true;
    const unclokedIndexes = nextPage ? [0, 1, 3] : [0, 1];
    const buttonClass = nextPage ? 'button order-page__button' : 'button button--disabled order-page__button'


    return (
        <section className="extra-page order-page">
            <h1 className="visually-hidden">Станица заказа - выбор дополнительных услуг</h1>
            <BurgerMenu/>
                <div className="order-page__wrapper">
                    <div className="order-page__container">
                        <Header/>
                    </div>
                    <Navigation activeIndex={2} unlockedIndexes={unclokedIndexes} links={links}/>
                    <div className=" order-page__container order-page__content">
                        <div className="order-page__left-container">
                            <h2 className="extra-page__heading">Цвет</h2>
                            <div className="order-page__settings">
                                {           
                                    carColors.map((color) => (
                                        <ColorRadio key={color.name} color={color}/>
                                    ))
                                }
                            </div>
                            <div className="order-page__date">
                                <h2 className="extra-page__heading">Дата аренды</h2>
                                <label className="order-page__label extra-page__label">
                                    C
                                    <input type="text" name="city" className="order-page__input" placeholder="Введите дату и время" value={fromDate} onChange={(e) => setFromDate(e.target.value)}></input>
                                    <button className={clearFrom} onClick={() => setFromDate('')}><OrderCross/></button>
                                </label>
                                <label className="order-page__label extra-page__label">
                                    По
                                    <input type="text" name="delivery" className="order-page__input" placeholder="Введите дату и время" value={toDate} onChange={(e) => setToDate(e.target.value)}></input>
                                    <button className={clearTo} onClick={() => setToDate('')}><OrderCross/></button>
                                </label>
                            </div>
                            <div className="order-page__tarif">
                            <h2 className="extra-page__heading">Тариф</h2>
                            {           
                                    tarifs.map((tarif) => (
                                        <Tarif key={tarif.name} tarif={tarif}/>
                                    ))
                            }
                            </div>
                            <div className="order-page__additions">
                                <h2 className="extra-page__heading">Доп услуги</h2>
                                {           
                                    additions.map((addition) => (
                                        <Additions key={addition.name} addition={addition}/>
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
                            <div className="order-page__info">
                                <div className="order-page__info-title">Цвет</div>
                                <div className="order-page__info-dash"></div>
                                <div className="order-page__info-value">Голубой</div>
                            </div>
                            <div className="order-page__info">
                                <div className="order-page__info-title">Длительность аренды</div>
                                <div className="order-page__info-dash"></div>
                                <div className="order-page__info-value">1д 2ч</div>
                            </div>
                            <div className="order-page__info">
                                <div className="order-page__info-title">Тариф</div>
                                <div className="order-page__info-dash"></div>
                                <div className="order-page__info-value">на сутки</div>
                            </div>
                            <div className="order-page__info">
                                <div className="order-page__info-title">Полный бак</div>
                                <div className="order-page__info-dash"></div>
                                <div className="order-page__info-value">да</div>
                            </div>
                            <div className="order-page__price">
                                <span className="order-page__price-header">Цена:</span>
                                <span className="order-page__price-to"> 16 000 &#8381;</span>
                            </div>
                            <Link to="/order/final" className={buttonClass}>Итого</Link>
                        </div>
                    </div>
                    <footer className="order-page__footer"></footer>        
                </div> 
        </section>
    )
}

export default ExtraPage