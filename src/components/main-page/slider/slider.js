import React, { useState, useEffect, useRef } from 'react';
import './slider.scss';
import SliderContent from './slider-content';

import image1 from '../../../images/slider_image_1.jpg';
import image2 from '../../../images/slider_image_2.jpg';
import image3 from '../../../images/slider_image_3.jpg';
import image4 from '../../../images/slider_image_4.jpg';

const Slider = () => {

    const content = [
        {image: image1, header: 'Бесплатная парковка', text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.', buttonClass: 'slider__button slider__button--first button'},
        {image: image2, header: 'Страховка', text: 'Полная страховка страховка автомобиля', buttonClass: 'slider__button slider__button--second button'},
        {image: image3, header: 'Бензин', text: 'Полный бак на любой заправке города за наш счёт', buttonClass: 'slider__button slider__button--third button'},
        {image: image4, header: 'Обслуживание', text: 'Автомобиль проходит еженедельное ТО', buttonClass: 'slider__button slider__button--fourth button'},
    ]

    const myRef = useRef(null)

    const [myComponentWidth, setMyComponentWidth] = useState('')
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
      })
    useEffect(() =>{
        handleResize();
    if(myRef.current)
      window.addEventListener('resize', handleResize)

    return ()=> {
    window.removeEventListener('resize', handleResize)
    }
  }, [myRef])
    const handleResize = () => {
      setMyComponentWidth(myRef.current.offsetWidth)
    }
  
    
  
    const { translate, transition, activeIndex } = state

    const nextSlide = () => {
        if (activeIndex === content.length - 1) {
            return setState({
              ...state,
              translate: 0,
              activeIndex: 0
            })
          }
      
          setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * myComponentWidth
          })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
              ...state,
              translate: (content.length - 1) * myComponentWidth,
              activeIndex: content.length - 1
            })
          }
      
          setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * myComponentWidth
          })
    }

    return (
      <div className="slider" ref={myRef}>
        <button onClick={() => prevSlide()} className="slider__control slider__control-left">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1L1 10L9 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        <SliderContent
          translate={translate}
          transition={transition}
          width={myComponentWidth}
          content={content}
        >
        </SliderContent>
        <button onClick={() => nextSlide()} className="slider__control slider__control-right">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 10L1 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        <div className="slider__radio-controls">
            <button className="slider__radio slider__radio--active"></button>
            <button className="slider__radio"></button>
            <button className="slider__radio"></button>
            <button className="slider__radio"></button>
        </div>
      </div>
    )
  }
export default Slider;
    
    // return (
    //     <div className="slider">
    //         <button className="slider__control slider__control-left">
    //             <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M9 1L1 10L9 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //             </svg>
    //         </button>
    //         <div className="slider__wrapper">
    //             <div className="slider__item slider__item-first hidden ">
    //                 <h3 className="slider__header">Бесплатная парковка</h3>
    //                 <p className="slider__info">Оставляйте машину на платных городских парковках
    //                 и разрешенных местах, не нарушая ПДД,
    //                 а также в аэропортах.</p> 
    //                 <button className="slider__button slider__button--first button">Подробнее</button>
    //             </div>
    //             <div className="slider__item slider__item-second ">
    //                 <h3 className="slider__header">Страховка</h3>
    //                 <p className="slider__info">Полная страховка страховка автомобиля</p> 
    //                 <button className="slider__button slider__button--second button">Подробнее</button>
    //             </div>
    //             <div className="slider__item slider__item-third hidden">
    //                 <h3 className="slider__header">Бензин</h3>
    //                 <p className="slider__info">Полный бак на любой заправке города за наш счёт</p> 
    //                 <button className="slider__button slider__button--third button">Подробнее</button>
    //             </div>
    //             <div className="slider__item slider__item-fourth hidden">
    //                 <h3 className="slider__header">Обслуживание</h3>
    //                 <p className="slider__info">Автомобиль проходит еженедельное ТО</p> 
    //                 <button className="slider__button slider__button--fourth button">Подробнее</button>
    //             </div>
    //             <div className="slider__radio-controls">
    //                 <button className="slider__radio slider__radio--active"></button>
    //                 <button className="slider__radio"></button>
    //                 <button className="slider__radio"></button>
    //                 <button className="slider__radio"></button>
    //             </div>
    //         </div>
    //         <button className="slider__control slider__control-right">
    //             <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M1 1L9 10L1 19" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    //             </svg>
    //         </button>
    //     </div>
    // )

