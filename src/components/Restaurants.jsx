import React from 'react';
// images
import img1 from "../assets/images/restaurants/1.png";
import img2 from "../assets/images/restaurants/2.png";

export default function Restaurants() {
    return (
        <>
            <div className="container delivery-cnt">
                <div className="delivery">
                    <i class="fa-solid fa-truck"></i>
                    <div className="text">
                        <h4>Бесплатная доставка</h4>
                        <p>Закажите прямо сейчас и получите бесплатную доставку</p>
                    </div>
                </div>
            </div>

            <div className='restaurants container'>
                <div className="restaurants__title">
                    <h1 className="title">Цветы для  букетов:</h1>
                    <a href="#">Посмотреть все</a>
                </div>

                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className="card">
                            <img className='card-img' src={img1} alt="img" />
                            <div className="text">
                                <h4 className='card-title'>Пионы</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="card">
                            <img className='card-img' src={img2} alt="img" />
                            <div className="text">
                                <h4 className='card-title'>Пионы</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="card">
                            <img className='card-img' src={img2} alt="img" />
                            <div className="text">
                                <h4 className='card-title'>Пионы</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="card">
                            <img className='card-img' src={img2} alt="img" />
                            <div className="text">
                                <h4 className='card-title'>Пионы</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
