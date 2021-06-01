import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../images/porsche-svg.svg'

export default function Nav() {
    return (
        <>
            <img alt="logo" src={logo} />
            <p>Россия</p>
            <nav>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/catalog'>Каталог</NavLink>
                <NavLink to='/contact'>Контакты</NavLink>
            </nav>
        </>
    )
}
