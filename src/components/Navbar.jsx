import React from 'react';
import logo from "../assets/images/logo.png";

export default function Navbar() {
    return (
        <nav className='nav header'>
            <img src={logo} alt='logo' className="logo" />
            <div className="header__input">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input placeholder='Завидение, блюдо, товар или кухня' type="text" />
                <button>найти</button>
            </div>
            <div className="header__tel">
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+9981234567">+9981234567</a>
            </div>
            <div className="header__profile">
                <i class="fa-solid fa-user"></i>
                <a href='#'>Профиль</a>
            </div>
        </nav>
    )
}