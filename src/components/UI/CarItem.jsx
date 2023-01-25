import React from 'react'
import { Col,Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'


import '../../styles/car-item.css';

const CarItem = (props) => {

  const { id, imgUrl, model, carName, automatic, horsePower, price, condition, brand } = props.item
  function addToCart() {
    if (window.username !== "") {
      const isFound = window.cart.some(element => {
        if (element.id === id) {
          return true;
        }
        return false;
      });
      if (!isFound) {
        window.cart.push(props.item);
        NotificationManager.success('Successfully added ' + carName, 'Added to cart !');
        setTimeout(() => {
          NotificationManager.removeAll();
        }, 3000);
      }
      else {
        NotificationManager.info(carName +' is already in the cart ', 'Something went wrong!', 3000);
        setTimeout(() => {
          NotificationManager.removeAll();
        }, 3000);
      }
    }
    else {
      NotificationManager.error('Please log in and try again', 'You are not logged in!', 3000);
      setTimeout(() => {
        NotificationManager.removeAll();
      }, 3000);
    }
  }

  return <Col lg='5' md='4' sm='6' className='mb-5'>
    <div className="car__item">
      <div className="car__img">
        <img src={imgUrl} alt="" className='w-100' />
      </div>
      <div className="car__item-content mt-4">
        <h2 className="section__title text-center bg-white">{brand} {carName}</h2>
        <h4 className="section__title text-center bg-white">{model}</h4>
        <h6 className="price text-center bg-white">Starts at ${price}</h6>

        <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
          <span className=' d-flex align-items-center gap-1'><i className="ri-car-line"></i> {condition} </span>
          <span className=' d-flex align-items-center gap-1'><i className="ri-settings-line"></i> {automatic}</span>
          <span className=' d-flex align-items-center gap-1'><i className="ri-fire-line"></i> {horsePower} HP</span>
        </div>
        <Row >
          <button className=" w-50 car__item-btn car__btn-buy" onClick={addToCart}>
            <span className='justify-content-evenly'><i className="ri-shopping-cart-line"></i> Add to cart</span>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </Row>





      </div>
    </div>
    <NotificationContainer />
  </Col>
}

export default CarItem