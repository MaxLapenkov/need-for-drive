import React from 'react'
import './main-page.scss'
import StartScreen from './start-screen'
import BurgerMenu from '../burger-menu'
import Slider from './slider'

const MainPage = () => {
	return (
		<div className="main-page">
			<BurgerMenu substrate={true} />
			<StartScreen />
			<Slider />
		</div>
	)
}

export default MainPage
