import React, { useState, useEffect, useRef } from 'react'
import './slider.scss'
import SliderContent from './slider-content'
import Dots from './dots'
import { ArrowLeft } from '../../../assets/icons'
import { ArrowRight } from '../../../assets/icons'

import image1 from '../../../assets/images/slider_image_1.jpg'
import image2 from '../../../assets/images/slider_image_2.jpg'
import image3 from '../../../assets/images/slider_image_3.jpg'
import image4 from '../../../assets/images/slider_image_4.jpg'

const Slider = () => {
	const content = [
		{
			image: image1,
			header: 'Бесплатная парковка',
			text:
				'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
			buttonClass: 'slider__button slider__button--first button',
		},
		{
			image: image2,
			header: 'Страховка',
			text: 'Полная страховка страховка автомобиля',
			buttonClass: 'slider__button slider__button--second button',
		},
		{
			image: image3,
			header: 'Бензин',
			text: 'Полный бак на любой заправке города за наш счёт',
			buttonClass: 'slider__button slider__button--third button',
		},
		{
			image: image4,
			header: 'Обслуживание',
			text: 'Автомобиль проходит еженедельное ТО',
			buttonClass: 'slider__button slider__button--fourth button',
		},
	]

	const myRef = useRef(null)

	const [myComponentWidth, setMyComponentWidth] = useState('')
	const [state, setState] = useState({
		activeIndex: 0,
		translate: 0,
		transition: 0.45,
	})
	useEffect(() => {
		const handleResize = () => {
			setMyComponentWidth(myRef.current.offsetWidth)
			setState({
				activeIndex: 0,
				translate: 0,
			})
		}
		handleResize()
		if (myRef.current) window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [myRef])

	const { translate, transition, activeIndex } = state

	const nextSlide = () => {
		if (activeIndex === content.length - 1) {
			return setState({
				...state,
				translate: 0,
				activeIndex: 0,
			})
		}

		setState({
			...state,
			activeIndex: activeIndex + 1,
			translate: (activeIndex + 1) * myComponentWidth,
		})
	}

	const prevSlide = () => {
		if (activeIndex === 0) {
			return setState({
				...state,
				translate: (content.length - 1) * myComponentWidth,
				activeIndex: content.length - 1,
			})
		}

		setState({
			...state,
			activeIndex: activeIndex - 1,
			translate: (activeIndex - 1) * myComponentWidth,
		})
	}
	const changeSlide = (i) => {
		return setState({
			...state,
			activeIndex: i,
			translate: i * myComponentWidth,
		})
	}

	return (
		<div className="slider" ref={myRef}>
			<button
				onClick={() => prevSlide()}
				className="slider__control slider__control-left"
				aria-label="change slide to the left"
			>
				<ArrowLeft />
			</button>
			<button
				onClick={() => nextSlide()}
				className="slider__control slider__control-right"
				aria-label="change slide to the right"
			>
				<ArrowRight />
			</button>
			<SliderContent
				translate={translate}
				transition={transition}
				width={myComponentWidth}
				content={content}
			></SliderContent>
			<Dots
				slides={content}
				activeIndex={activeIndex}
				changeSlide={(i) => changeSlide(i)}
			/>
		</div>
	)
}
export default Slider
