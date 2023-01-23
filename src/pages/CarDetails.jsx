import React, { useEffect} from 'react'
import carData from '../assets/data/carData'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import { Link, useParams } from 'react-router-dom'
import CarItem from '../components/UI/CarItem'

import '../styles/car-details.css'



const CarDetails = () => {

  const { slug } = useParams()

  const singleCar = carData.find(item => item.carName === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCar]);
  const carsToLoad = carData;
  var counter = 0;
  
  function loadCarItem(item) {
    if (carsToLoad.length > 0 && item.brand.includes(singleCar.brand) === true && singleCar.id !== item.id) {
      counter++
      return <CarItem item={item} key={item.id} />
    }

  }  

  return <Helmet title={singleCar.carName}>

    <section>
      <Container   >
        <Row >
          <Col lg='6'>
            <div className='left-content'>
              <img src={singleCar.imgUrl} alt="" className='w-100 rounded-5' />
              <h5 className='mt-2'>Want to exchange your car for this one ?</h5>
              <button className='btn__exchange'>
                <Link to="/exchange"> {/* link it to exchange form */}
                  <span><i className="ri-exchange-fill"></i> Exchange</span>
                </Link>
              </button>
            </div>
          </Col>
          <Col lg='6'>
            <div className='car__info'>
              <h2 className='section__title'>{singleCar.brand} {singleCar.carName}</h2>
              <h4 className='section__subtitle'>{singleCar.model} {singleCar.year}</h4>

              <div className='d-flex align-items-center mt-3' style={{ columnGap: "4rem" }}>
                <span className='d-flex align-items-center gap-1 section__description'>
                  <i className="ri-check-double-line" ></i> {singleCar.condition}
                </span>
                <span className='d-flex align-items-center gap-1 section__description'>
                  <i className="ri-settings-line" ></i> {singleCar.automatic}
                </span>
                <span className='d-flex align-items-center gap-1 section__description'>
                  <i className="ri-fire-line" ></i> {singleCar.horsePower} HP
                </span>
              </div>
              <div className='d-flex align-items-center mt-3' style={{ columnGap: "4rem" }}>
                <span className='d-flex align-items-center gap-1 section__description'>
                  <i className="ri-roadster-line" ></i> {singleCar.bodyType}
                </span>
                <span className='d-flex align-items-center gap-1 section__description'>
                  <i className="ri-gas-station-line" ></i> {singleCar.fuelType}
                </span>
              </div>

              <div className='d-flex align-items-center gap-5 mb-3 mt-3'>
                <h6 className='price fw-bold fs-5'>Starts at ${singleCar.price}</h6>
                <span className='d-flex align-items-center gap-2'>
                  <span className='span__star' >
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                  </span>
                  {singleCar.rating} reviews
                </span>
              </div>
              <hr />
              <p className="section__description">
                {singleCar.description}
              </p>
              <hr />
              <div className='button__section d-flex align-items-center justify-content-evenly gap-5'>

                <button className='btn__details'>
                  <Link to="/details"> {/* link it to more details about the car */}
                    <span><i className="ri-tools-fill"></i> Full specifications</span>
                  </Link>
                </button>

                <button className='btn__buy'>
                  <Link to="/cart">
                    <span><i className="ri-shopping-cart-line"></i> Add to cart</span>
                  </Link>
                </button>

              </div>

            </div>
          </Col>
        </Row>
        <hr />
        <Col>
          <h3 className='section__title text-center mb-3'>Similar Products</h3>
          <Row className='similar-cars' >
            { carsToLoad != null &&
            carsToLoad.map((element) =>
              loadCarItem(element)
            )
            }
            { counter === 0 &&
              <h5 className='section__title text-center mb-3'>Sorry, there are no similar products at this time <i className="ri-emotion-sad-line"></i></h5>
            }

          </Row>
        </Col>
      </Container>
    </section>

  </Helmet>
}

export default CarDetails