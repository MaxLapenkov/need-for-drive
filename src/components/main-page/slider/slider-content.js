import React from 'react'
import Slide from './slide'

const SliderContent = (props) => {
    
    const sliderContentStyles = {
        transform: `translateX(-${props.translate}px)`,
        transition: `transform ease-out ${props.transition}s`,
        width: `${props.width * props.content.length}px`,
    }
    return (
        <div className="slider__content" style={sliderContentStyles}>
            {
                props.content.map(slide => (
                    <Slide key={slide.image} content={slide}/>
                ))
            }
        </div>
    )
}
export default SliderContent