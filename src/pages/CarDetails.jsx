import React,{useEffect} from 'react'
import carData from '../assets/data/carData'
import { Container,Row,Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import { Link, useParams } from 'react-router-dom'
import '../styles/car-details.css'

const CarDetails = () => {

  const {slug} = useParams()

  const singleCar = carData.find(item=> item.carName === slug);
  useEffect(()=> {
    window.scrollTo(0,0);
  },[singleCar]);


  return <Helmet title={singleCar.carName}>
    
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={singleCar.imgUrl} alt="" className='w-100 rounded-5' />
          </Col>
          <Col lg='6'>
            <div className='car__info'>
              <h2 className='section__title'>{singleCar.brand} {singleCar.carName}</h2>
              <h4 className='section__subtitle'>{singleCar.model} {singleCar.year}</h4>
              
              <div className='d-flex align-items-center mt-3' style={{columnGap : "4rem"}}>
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
              <div className='d-flex align-items-center mt-3' style={{columnGap : "4rem"}}>
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
      </Container>
    </section>

  </Helmet>
}

export default CarDetails