import React from 'react'
import Slider from 'react-slick'

import ava01 from "../../assets/images/stock-img/avatar-1.jpg"
import ava02 from "../../assets/images/stock-img/avatar-2.jpg"
import ava03 from "../../assets/images/stock-img/avatar-3.jpg"
import ava04 from "../../assets/images/stock-img/avatar-4.jpg"
import ava05 from "../../assets/images/stock-img/avatar-5.jpg"


const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };
  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p className="section__description">
        This is the best car buying experience I have ever had. Their customer service team was incredibly helpful and friendly. The cars were of top quality and in great condition, offering competitive prices. I am very satisfied with my purchase and would highly recommend it to anyone looking for a reliable car dealership!
        </p>
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={ava01} alt="" className='w-25 h-25 rounded-2'/>
            <div>
                <h6 className="mb-0 mt-3">Jane Doe</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently purchased a car from this website and it was the best car-buying experience I've ever had. The staff was friendly, knowledgeable, and accommodating. They made sure to answer all of my questions and even offered me an exhange of my old car to the car I was interested in. I'm so glad I chose them for my purchase!
        </p>
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={ava02} alt="" className='w-25 h-25 rounded-2'/>
            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className="section__description">
        This has been my go-to car buying website for years now. The staff were friendly and knowledgeable, and they provided me with all the information I needed to make an informed decision. The process was smooth and hassle-free, and I was able to get a great deal on my new car. They're is the best car selling service out there!
        </p>
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
            <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className="section__description">
        This website has been a lifesaver for me. I was looking for a new car and had no idea where to start. They made the process so easy and stress-free, and also have an amazing selection of cars, great customer service, and the best prices around. I would highly recommend this website to anyone looking for a new car!
        </p>
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={ava04} alt="" className='w-25 h-25 rounded-2'/>
            <div>
                <h6 className="mb-0 mt-3">Jane Doe</h6>
                <p className="section__description">Customer</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p className="section__description">
        This website is my go-to for finding the best deals on cars. Whenever I'm looking for a new car, this is the first place I check. They have a wide selection of cars and their customer service is top notch - they take time to help me find the perfect car and make sure I'm getting the best deal. Highly recommend Autosalon!
        </p>
        <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={ava05} alt="" className='w-25 h-25 rounded-2'/>
            <div>
                <h6 className="mb-0 mt-3">Jane Doe</h6>
                <p className="section__description">Customer</p>
            </div>

        </div>
    </div>
  </Slider>
}

export default Testimonial