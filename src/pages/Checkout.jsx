import React from 'react'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useState } from 'react'

import '../styles/checkout.css'

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [number, setNumber] = useState("");
    const [expm, setExpm] = useState("");
    const [expy, setExpy] = useState("");
    const [cvc, setCvc] = useState("");

    var total = location.state;

    const submitHandler = event => {
        event.preventDefault();
        if (number !== "" && expm !== "" && expy !== "" && cvc !== "") {
            NotificationManager.success('You will be contacted on the day of delivery!', 'Payment successful !', 3000);
            window.cart = [];
            total = 0;
            setTimeout(() => {
                NotificationManager.removeAll();
                navigate('/cart');
            }, 3000);
        }
        else {
            NotificationManager.error('Some fields might be empty!', 'Payment failed !', 3000);
            setTimeout(() => {
                NotificationManager.removeAll();
            }, 3000);
        }
    }

    return <Helmet title='Checkout'>
        <CommonSection title='Please enter your credit card information' />
        <Container>
            <Row className=' align-items-center justify-content-center'>
                <Col className='pay__left-side-out mb-5 h-100'>
                    <div className='pay__left-side-in d-flex flex-column align-items-center h-100 '>
                        <Form onSubmit={submitHandler} className=' mt-3'>

                            <h1 className='section__title mb-1 text-center'>Make the payment</h1>
                            <h3 className='section__subtitle mb-3 text-center'>To finalize your purchase, kindly complete your payment using a valid credit card</h3>
                            <FormGroup>
                                <Col className='d-flex flex-column align-items-center '>
                                    <label >Card number</label>
                                    <input value={number} onChange={e => setNumber(e.target.value)} className='w-50 fs-5 text-center' id="ccn" type="text" minLength="12" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" />
                                </Col>
                            </FormGroup>
                            <Row className='align-items-center justify-content-center'>
                                <div className='exp-group'>
                                    <Col className='d-flex flex-column align-items-center '>
                                        <label>Expiry date</label>
                                        <div className=' d-flex align-items-center justify-content-center '>
                                            <input value={expm} onChange={e => setExpm(e.target.value)} autoComplete="off" className="exp w-25 text-center" id="month" minLength="2" maxLength="2" placeholder="MM" type="text" />
                                            <input value={expy} onChange={e => setExpy(e.target.value)} autoComplete="off" className="exp w-25 ms-2 text-center" id="year" minLength="2" maxLength="2" placeholder="YY" type="text" />
                                        </div>
                                    </Col>
                                </div>

                                <div className='cvc-group'>
                                    <Col className='d-flex flex-column align-items-center '>
                                        <label>CVC</label>
                                        <input value={cvc} onChange={e => setCvc(e.target.value)} id="cvc" className="cc-cvc w-25 text-center" type="text" minLength="4" maxLength="4" placeholder="CVC" />
                                    </Col>
                                </div>

                            </Row>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button type='submit' className='btn btn-primary mt-3 mb-3' >
                                    Pay Now
                                </button>
                            </div>


                        </Form>
                    </div>
                </Col>
                <Col className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='pay__right-side-out  mb-5 '>
                        <div className='pay__right-side-in d-flex flex-column align-items-center justify-content-center' >

                            <h4 className='section__subtitle mb-1'>You have to pay,</h4>
                            <h5 className='section__title  mb-3'>${total}</h5>
                            <div className='d-flex flex-column align-items-center justify-content-center mb-3'>
                                <h4 className='section__subtitle text-dark mb-1 d-flex align-items-center'><i className="ri-checkbox-circle-fill text-success me-1"></i> Payment & Invoice</h4>
                                <span className='w-50'>
                                    We'll worry about the payment, you can just sit back and relax while we deliver the receipt to your email as soon as possible
                                </span>
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-center mb-3 '>
                                <h4 className='section__subtitle text-dark mb-1 d-flex align-items-center'><i className="ri-emotion-fill text-success me-1"></i> Thank you</h4>
                                <span className='w-50'>
                                    We appreciate you trusting us with this purchase, your car will be delivered to you once the payment has been authorized
                                </span>
                            </div>



                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
        <NotificationContainer />

    </Helmet>
}

export default Checkout