import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import '../../styles/car-item.css';

const CarItem = (props) => {

  const {id,imgUrl,model,carName,automatic,horsePower,price,condition,brand} = props.item


  return <Col lg='5' md='4' sm='6' className='mb-5'>
    <div className="car__item">
        <div className="car__img">
            <img src={imgUrl} alt="" className='w-100' />
        </div>
        <div className="car__item-content mt-4">
            <h2 className="section__title text-center">{brand} {carName}</h2>
            <h4 className="section__title text-center">{model}</h4>
            <h6 className="price text-center">Starts at ${price}</h6>

            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                <span className=' d-flex align-items-center gap-1'><i className="ri-car-line"></i> {condition} </span>
                <span className=' d-flex align-items-center gap-1'><i className="ri-settings-line"></i> {automatic}</span>
                <span className=' d-flex align-items-center gap-1'><i className="ri-fire-line"></i> {horsePower} HP</span>
            </div>
            
            <button className=" w-50 car__item-btn car__btn-buy">
                <Link to={`/cart`}>Buy Now</Link>
            </button>
            
            <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>


        </div>
    </div>
  </Col>
}

export default CarItem