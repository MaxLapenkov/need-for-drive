import React from 'react'
import { NavArrow } from '../../../assets/icons'
import './navigation.scss'
import { Link } from 'react-router-dom'

const LinkToPage = ( {active, unlocked, text, address} ) => {
    let linkClass = 'navigation__item';
        if (unlocked) {
            linkClass = 'navigation__item navigation__item--unlocked'
        } else if (active) {
            linkClass = 'navigation__item navigation__item--active'
        }
    if(!active) {
        return (
            <li className={linkClass}>
                <NavArrow styles="navigation__item-icon"/>
                <Link to={address}>{text}</Link>
            </li>
        )
    }
    return (
        <li className={linkClass}>
            <Link to={address}>{text}</Link>
        </li>
    )
}

const Navigation = ({ activeIndex, unlockedIndexes, links }) => {

    const checkUnlockedIndexes = (unlockedIndexes, i) => {
        let result = false;
        unlockedIndexes.forEach(element => {
            if (element === i) {
                result = true
            }
        });
        return result;
    }
    
    return (
        <nav className="navigation">
            <ul className="navigation__list order-page__container">
            {           
                links.map((link, i) => (
                    <LinkToPage key={i} active={activeIndex === i} unlocked={checkUnlockedIndexes(unlockedIndexes, i)} text={link.link} address={link.address}/>
                ))
            }
            </ul>
        </nav>
    )
}
export default Navigation