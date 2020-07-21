import React from 'react'
import './header.scss'
import { IconLocation } from '../../assets/icons'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className="start-screen__header header">
			<Link className="header__logo" to="/need-for-drive">
				Need for Drive
			</Link>
			<div className="header__location">
				<IconLocation />
				<span className="header__city">Ульяновск</span>
			</div>
		</header>
	)
}
export default Header
