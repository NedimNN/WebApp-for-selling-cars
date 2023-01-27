import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-section.css'
import img from '../../assets/images/about-car-img.jpg'

const AboutSection = () => {
    return <section className='about__section'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__section-content">
                        <h4 className='section__title'>About Us</h4>
                        <p className='section__description'> We are a group of people that are focused on delivering a quality service, and that service is getting you the dream car you always wanted. Of course, if you want we can take your old car of your hands where a qualified mechanic will thoroughly inspect your car. You will receive a detailed report about the technical condition of the car, and our advice. You just take your time and decide.</p>

                        <div className="section__item d-flex align-items-center mt-3">
                            <p className="section__item-description d-flex align-items-center gap-2">
                                <i className="ri-check-double-line"></i>
                                Completely online within a few minutes.
                            </p>

                            <p className="section__item-description d-flex align-items-center gap-2">
                                <i className="ri-check-double-line"></i>
                                Delivery to your doorstep.
                            </p>
                        </div>
                        <div className="section__item d-flex align-items-center mt-3">
                            <p className="section__item-description d-flex align-items-center gap-2">
                                <i className="ri-check-double-line"></i>
                                Very qualified mechanics and technicians.
                            </p>

                            <p className="section__item-description d-flex align-items-center gap-2">
                                <i className="ri-check-double-line"></i>
                                Thorough vehicle check.
                            </p>

                        </div>

                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={img} alt="" className='w-100 rounded-5' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default AboutSection