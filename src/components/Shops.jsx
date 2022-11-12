import React, { useRef } from 'react';
import img from "../assets/images/shops/1.png";

export default function Shops() {
    const shopCards = useRef();

    const scrollLeft = () => {
        shopCards.current.scrollLeft -= 150;
    }

    const scrollRight = () => {
        shopCards.current.scrollLeft += 150;
    }

    return (
        <div className='shop container'>
            <h1 className='title'>Магазины</h1>

            <div onClick={scrollLeft} className="scroll scroll-left"><i class="fa-solid fa-arrow-left"></i></div>
            <div onClick={scrollRight} className="scroll scroll-right"><i class="fa-solid fa-arrow-right"></i></div>
            <div ref={shopCards} className="shop__cards">

                <div className="card">
                    <img src={img} alt="asda" className="card-img" />
                    <div className="text">
                        <h4 className="card-text">The Loaf</h4>
                        <p className='card-text'>title</p>
                    </div>

                </div>

                <div className="card">
                    <img src={img} alt="asda" className="card-img" />
                    <div className="text">
                        <h4 className="card-text">The Loaf</h4>
                        <p className='card-text'>title</p>
                    </div>

                </div>

                <div className="card">
                    <img src={img} alt="asda" className="card-img" />
                    <div className="text">
                        <h4 className="card-text">The Loaf</h4>
                        <p className='card-text'>title</p>
                    </div>

                </div>

                <div className="card">
                    <img src={img} alt="asda" className="card-img" />
                    <div className="text">
                        <h4 className="card-text">The Loaf</h4>
                        <p className='card-text'>title</p>
                    </div>

                </div>

                <div className="card">
                    <img src={img} alt="asda" className="card-img" />
                    <div className="text">
                        <h4 className="card-text">The Loaf</h4>
                        <p className='card-text'>title</p>
                    </div>

                </div>

                <div className="card">
                    <img src={img} alt="asda" className="card-img" />
                    <div className="text">
                        <h4 className="card-text">The Loaf</h4>
                        <p className='card-text'>title</p>
                    </div>

                </div>

                <div className="card">
                    <img src={img} alt="asda" className="card-img" />
                    <div className="text">
                        <h4 className="card-text">The Loaf</h4>
                        <p className='card-text'>title</p>
                    </div>

                </div>

                <div className="card">
                    <img src={img} alt="asda" className="card-img" />
                    <div className="text">
                        <h4 className="card-text">The Loaf</h4>
                        <p className='card-text'>title</p>
                    </div>

                </div>

            </div>
        </div>
    )
}