import React from 'react'
import './start-screen.scss'
import Header from '../../header'
import { Link } from 'react-router-dom'

const StartScreen = () => {
	return (
		<div className="start-screen container">
			<Header />
			<main className="start-screen__content content">
				<h1 className="content__header">Каршеринг</h1>
				<h2 className="content__name">Need for Drive</h2>
				<p className="content__desc">Поминутная аренда авто твоего города</p>
				<Link to="/order/map" className="content__button button">
					Забронировать
				</Link>
			</main>
			<footer className="start-screen__footer footer">
				<p className="footer__copyright">© 2016-2019 «Need for drive»</p>
				<a className="footer__phone" href="tel:84952342244">
					8 (495) 234-22-44
				</a>
			</footer>
		</div>
	)
}
export default StartScreen
