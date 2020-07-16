import React from 'react'

const Slide = ({ content }) => {

    const slideStyles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, #000 100%),
                     url(${content.image})`,
    }
    return (
        <div className="slider__item" style={slideStyles}>
            <h3 className="slider__header">{content.header}</h3>
            <p className="slider__info">{content.text}</p> 
            <button className={content.buttonClass}>Подробнее</button>
        </div>
    )
}

export default Slide