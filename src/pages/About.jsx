import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import AboutSection from '../components/UI/AboutSection'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import Employees from '../components/UI/Employees'

import driveImg from '../assets/images/about-background.jpg'

const About = () => {
  return <Helmet title='About'>
    <CommonSection title='About Us'/>
    <AboutSection/>
    <section className='about__page-section'>
      <Container>
        <Row> 
          <Col lg='6' md='6' sm='12'>
            <div className='about__page-img'>
              <img src={driveImg} alt="" className='w-100 rounded-5'/>
            </div>
          </Col>
          <Col lg='6' md='6' sm='12'>
            <div className='about__page-content'>
              <h2 className="section__title">We are commited to ensure that buying cars becomes as easiest as possible</h2>
              <p className='section__description'>
              We know that buying a car can sometimes be an inconvenience, so we'd like to welcome you to our website where everything you need for buying a car is here, and if you need assistance you can always give us a call.
              </p>
              <div className='d-flex align-items-center gap-3 mt-4'>
                <span className='fs-4'><i className="ri-phone-fill"></i></span>
                <div>
                  <h6 className="section__subtitle">Need some help?</h6>
                  <h4>+387-62-325-328</h4>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>

    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
            <h6 className='section__title'>Our Employees</h6>
          </Col>
          <Employees/>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default About