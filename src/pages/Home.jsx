import React from 'react'

import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import carData from '../assets/data/carData'
import CarItem from '../components/UI/CarItem'
import { Container, Row, Col } from 'reactstrap'
import Testimonial from '../components/UI/Testimonial'

const Home = () => {
  return (
          <Helmet title="Home">
            <section className="p-0 hero__slider-section">
               <HeroSlider />
            </section>

            {/*~~~ car offer ~~~*/}
            <section>
              <Container>
                <Row className='justify-content-center'>
                  <Col lg='12' className='text-center mb-5'>
                    <h4 className="section__title">Our offers</h4>
                    <h6 className="section__subtitle">Check out our shop for more</h6>
                  </Col>
                  {
                    carData.slice(2,6).map(item=> ( 
                      <CarItem item = {item} key= {item.id}/>
                    ) )
                  }
                </Row>
              </Container>
            </section>

            {/*~~~ testimonials ~~~ */}
            <section>
              <Container>
                <Row>
                  <Col lg='12' className='mb-4 text-center'>
                    <h6 className="section__title">Reviews from our clients</h6>
                  </Col>

                  <Testimonial/>
                </Row>
              </Container>
            </section>
          </Helmet>
  )
}

export default Home