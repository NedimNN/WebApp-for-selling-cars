import React from 'react'

import { Container } from 'reactstrap'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

import '../../styles/hero-slider.css';

const HeroSlider = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScrool: 1,
        pauseOnHover: false,
    }
    return <Slider {...settings} className='hero__slider'>
        <div className="slider__item slider__item-01 mt0">
            <Container>
                <div className="slider__content">
                    <h4 className="text-light mb-3">Starts at $119.995</h4>
                    <h1 className="text-light mb-4">Audi Avant</h1>
                    <div>
                        <button className="btn buy__btn mt-4">
                            <Link to='/shop'>See shop</Link>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
        <div className="slider__item slider__item-02 mt0">
            <Container>
                <div className="slider__content">
                    <h4 className="text-light mb-3">Starts at $332.000</h4>
                    <h1 className="text-light mb-4">Rolls-Royce Wraith</h1>
                    <div>
                        <button className="btn buy__btn mt-4">
                            <Link to='/shop'>See shop</Link>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
        <div className="slider__item slider__item-03 mt0">
            <Container>
                <div className="slider__content">
                    <h4 className="text-light mb-3">Starts at $80.795</h4>
                    <h1 className="text-light mb-4">Ford GT-500</h1>
                    <div>
                        <button className="btn buy__btn mt-4">
                            <Link to='/shop'>See shop</Link>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    </Slider>
}

export default HeroSlider