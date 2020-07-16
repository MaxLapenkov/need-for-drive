import React from 'react'



const Dot = ({ active, changeSlide }) => {
    const dotClass = active ? 'slider__radio slider__radio--active' : 'slider__radio';
    return (
        <button className={dotClass} aria-label="change slide" onClick={changeSlide}></button>
    )
}

const Dots = ({ slides, activeIndex, changeSlide }) => {
    return (
        <div className="slider__radio-controls">
            {           
                slides.map((slide, i) => (
                    <Dot key={slide.image} active={activeIndex === i} changeSlide={() => changeSlide(i)}/>
                ))
            }
        </div>
    )
}

export default Dots