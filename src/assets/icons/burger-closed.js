import React from 'react'

const BurgerClosed = ({ classes }) => {
	return (
		<svg
			className={classes}
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				className="line-1"
				d="M24 8L8 24"
				stroke="white"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				className="line-2"
				d="M8 8L24 24"
				stroke="white"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
export default BurgerClosed
