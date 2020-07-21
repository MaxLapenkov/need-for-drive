import React, { useState } from 'react'
import BurgerMenu from '../../burger-menu';
import Header from '../../header';
import Navigation from '../navigation';
import { links, cars } from '../../../constants';
import '../order-page.scss';
import './final-page.scss';



const FinalPage = () => {

    const unclokedIndexes = [0, 1, 2, 3]
    
    const car = cars[1];
    const [modal, setModal] = useState(false);
    const [orderApproved, setOrderApproved] = useState(false);
    const modalClass = modal ? 'final-page__modal' : 'final-page__modal final-page__modal--closed';
    if(orderApproved) {
        return (
            <section className="final-page order-page">
            <BurgerMenu/>
                <div className="order-page__wrapper">
                    <div className="order-page__container">
                        <Header/>
                    </div>
                    <div className="final-page__number">
                        <h1 className="final-page__header">Заказ номер RU58491823</h1>
                    </div>
                    <div className=" order-page__container order-page__content">
                        <div className="order-page__left-container">
                            <div className="final-page__order">
                                <div className="final-page__order-info">
                                <h2 className="final-page__order-alert">Ваш заказ подтверждён</h2>
                                <p className="final-page__order-header">Hynday, {car.name}</p>
                                <p className="final-page__order-plate">K 761 HA 73</p>
                                <p className="final-page__order-info">Топливо <span className="final-page__order-value">100%</span></p>
                                <p className="final-page__order-info">Доступна с <span className="final-page__order-value">12.06.2019 12:00</span></p>
                                </div>
                                <img className="final-page__order-image" alt="иконка машины" src={car.thumbnail}></img>
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
                            <button className='button order-page__button order-page__button--back' onClick={() => setOrderApproved(false)}>Отменить</button>
                        </div>
                    </div>
                    <footer className="order-page__footer"></footer>        
                </div>
        </section>
        )
    }
    return (
        <section className="final-page order-page">
            <h1 className="visually-hidden">Станица заказа - Подтверждение заказа</h1>
            <BurgerMenu/>
                <div className="order-page__wrapper">
                    <div className="order-page__container">
                        <Header/>
                    </div>
                    <Navigation activeIndex={3} unlockedIndexes={unclokedIndexes} links={links}/>
                    <div className=" order-page__container order-page__content">
                        <div className="order-page__left-container">
                            <div className="final-page__order">
                                <div className="final-page__order-info">
                                <h2 className="final-page__order-header">Hynday, {car.name}</h2>
                                <p className="final-page__order-plate">K 761 HA 73</p>
                                <p className="final-page__order-info">Топливо <span className="final-page__order-value">100%</span></p>
                                <p className="final-page__order-info">Доступна с <span className="final-page__order-value">12.06.2019 12:00</span></p>
                                </div>
                                <img className="final-page__order-image" alt="иконка машины" src={car.thumbnail}></img>
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
                            <button className='button order-page__button' onClick={() => setModal(true)}>Заказать</button>
                        </div>
                    </div>
                    <footer className="order-page__footer"></footer>        
                </div>
                <div className={modalClass}>
                    <h2 className="final-page__modal-header">Подтвердить заказ</h2>
                    <div className="final-page__modal-controls">
                        <button className="button final-page__modal-button final-page__modal-button--aproove" onClick={() => {setOrderApproved(true); setModal(false);}}>Подтвердить</button>
                        <button className="button final-page__modal-button final-page__modal-button--back" onClick={() => setModal(false)}>Вернуться</button>
                    </div>
                </div> 
        </section>
    )
}

export default FinalPage