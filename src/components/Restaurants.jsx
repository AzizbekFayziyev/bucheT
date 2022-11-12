import React from 'react';
// images
import img1 from "../assets/images/restaurants/1.png";
import img2 from "../assets/images/restaurants/2.png";

export default function Restaurants() {
    return (
        <>
            <div className="delivery-cnt">
                <div className="delivery">
                    <i class="fa-solid fa-truck"></i>
                    <div className="text">
                        <h4>Бесплатная доставка</h4>
                        <p>Закажите прямо сейчас и получите бесплатную доставку</p>
                    </div>
                </div>
            </div>

            <div className='restaurants container'>
                <h1 className='title'>Рестораны</h1>

                <div className="navbar">
                    <ul className='nav'>
                        <li className="nav-item"><a href="#" className="nav-link">♥️ Избранные</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Новинки</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Fast Food</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Национальная</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Азиатская</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Кофейня</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Пиццерия</a></li>

                        <li className="nav-item other"><a href="#" className="nav-link">Еще <i class="fa-sharp fa-solid fa-arrow-down"></i></a></li>
                    </ul>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img className='card-img' src={img1} alt="img" />
                            <div className="text">
                                <h4 className='card-title'>ДОДО ПИЦЦА</h4>
                                <p className="card-text">card title</p>
                                <span><i class="fa-solid fa-star"></i> 4.2</span>
                                <span><i class="fa-solid fa-car"></i> 13,700 сум</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img className='card-img' src={img2} alt="img" />
                            <div className="text">
                                <h4 className='card-title'>ДОДО ПИЦЦА</h4>
                                <p className="card-text">card title</p>
                                <span><i class="fa-solid fa-star"></i> 4.2</span>
                                <span><i class="fa-solid fa-car"></i> 13,700 сум</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <img className='card-img' src={img2} alt="img" />
                            <div className="text">
                                <h4 className='card-title'>ДОДО ПИЦЦА</h4>
                                <p className="card-text">card title</p>
                                <span><i class="fa-solid fa-star"></i> 4.2</span>
                                <span><i class="fa-solid fa-car"></i> 13,700 сум</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
