import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import userData from '../assets/data/userData';
import { useNavigate } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications'


import '../styles/cart.css'

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [carsInCart, setCarsInCart] = useState(null);
  if (location.pathname === "/cart" && window.username !== "") {
    if (user == null) {
      userData.forEach((element) => {
        if (element.userName === window.username) {
          setUser(element);
        }
      })
    }
  }
  var add = [];
  if (window.cart.length > 0 && user != null && carsInCart === null) {
    window.cart.forEach((element) => {
      add.push(element);
    })
  }
  if (add.length > 0) {
    setCarsInCart(add);
  }
  function deleteItem(id) {
    var clean = [];
    carsInCart.forEach(element => {
      if (element.id !== id) {
        clean.push(element);
      }
    });
    setCarsInCart(clean);
    window.cart = clean;
    clean = [];
    if (window.cart.length === 0) {
      NotificationManager.info('Redirecting you to the shop', ' Your cart is empty!', 3000);
      setTimeout(() => {
        NotificationManager.removeAll();
        navigate('/shop');
      }, 3000);

    }
  }

  return <Helmet title='Cart'>
    <CommonSection title='Your cart' />
    <Container className='cart_row'>
      <Row className='align-items-center justify-content-center'>
        {carsInCart != null &&
          carsInCart.map(e => (
            <Col lg='5' md='4' sm='6' className='mb-5' key={e.id}>
              <div className="car__item">
                <div className="car__img">
                  <img src={e.imgUrl} alt="" className='w-100' />
                </div>
                <div className="car__item-content mt-4">
                  <h2 className="section__title text-center bg-white">{e.brand} {e.carName}</h2>
                  <h4 className="section__title text-center bg-white">{e.model}</h4>
                  <h6 className="price text-center bg-white">Starts at ${e.price}</h6>

                  <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                    <span className=' d-flex align-items-center gap-1'><i className="ri-car-line"></i> {e.condition} </span>
                    <span className=' d-flex align-items-center gap-1'><i className="ri-settings-line"></i> {e.automatic}</span>
                    <span className=' d-flex align-items-center gap-1'><i className="ri-fire-line"></i> {e.horsePower} HP</span>
                  </div>
                  <Row>
                    <button className="btn-delete w-50 " onClick={() => deleteItem(e.id)}>
                      <span>Remove from cart <i className="ri-delete-bin-2-line"></i></span>
                    </button>

                    <button className=" w-50 btn-details">
                      <Link to={`/cars/${e.carName}`}>Details</Link>
                    </button>
                  </Row>

                </div>
              </div>

            </Col>
          ))
        }
      </Row>
      {carsInCart == null &&
        <div className='empty-cart mb-5'>
          <h2 className='text-center'>Your cart is currently empty ! <i className="ri-shopping-cart-line" name='cart-ico'></i> </h2>
          <h3 className='text-center'>Add some items to your cart, then they will show up here </h3>

        </div>
      }

    </Container>
    <NotificationContainer />
  </Helmet>
}

export default Cart