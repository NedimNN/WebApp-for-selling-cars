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
                        <p className='section__description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eum praesentium. Impedit repellat voluptate, incidunt beatae ullam mollitia vero consectetur optio culpa debitis asperiores ipsa consequatur, vitae error velit, sapiente eligendi a. Accusantium voluptas corrupti beatae cupiditate blanditiis odio nihil voluptatem accusamus a? Dolorem molestias officia deleniti illo blanditiis vero.</p>

                        <div className="section__item d-flex align-items-center">
                            <p className="section__item-description d-flex align-items-center gap-2">
                                <i className="ri-check-double-line"></i>
                                Lorem ipsum dolor sit amet.
                            </p>

                            <p className="section__item-description d-flex align-items-center gap-2">
                                <i className="ri-check-double-line"></i>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="section__item d-flex align-items-center">
                            <p className="section__item-description d-flex align-items-center gap-2">
                                <i className="ri-check-double-line"></i>
                                Lorem ipsum dolor sit amet.
                            </p>

                            <p className="section__item-description d-flex align-items-center gap-2">
                                <i className="ri-check-double-line"></i>
                                Lorem ipsum dolor sit amet.
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