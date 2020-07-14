import React from 'react'



const Dot = ({ active, changeSlide }) => {
    const dotBackground = {
        background: `${active ? '#0EC261' : 'white'}`
    }
    return (
        <button className="slider__radio" style={dotBackground} aria-label="change slide" onClick={changeSlide}></button>
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