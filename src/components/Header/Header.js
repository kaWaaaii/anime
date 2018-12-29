import React from 'react';
import './Header.css'

const Header = props => {
    return (
        <header className="Header">
            <nav>
                <ul>
                    <li><img src="https://i108.fastpic.ru/big/2018/1228/8d/1e37827687185f38ceee463fae88358d.png" alt=""/></li>
                    <li><a href="#">{props.main}</a></li>
                    <li><a href="#">{props.anime}</a></li>
                    <li><a href="#">{props.manga}</a></li>
                    <li><a href="#">{props.community}</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;