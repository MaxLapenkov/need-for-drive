import React from 'react'

const SliderContent = (props) => {
    
    const sliderContentStyles = {
        transform: `translateX(-${props.translate}px)`,
        transition: `transform ease-out ${props.transition}s`,
        height: `100%`,
        width: `${props.width}px`,
        display: `flex`,
        background: `red`
    }
    return (
        <div id="slider__content" style={sliderContentStyles}>

        </div>
    )
}
export default SliderContent