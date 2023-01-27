import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Form, FormGroup, Row } from 'reactstrap'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/exchange.css'


const Exchange = () => {
  const navigate = useNavigate();

  const submitHandler = event => {
    event.preventDefault();
  }
  function successfulReserve() {
    NotificationManager.success('We will reach out to you on the day of your inspection !', 'Successfully reserved your inspection',);
    setTimeout(() => {
      NotificationManager.removeAll();
      navigate('/home', { replace: true });
    }, 3000);
  }


  return <Helmet title='Exchange'>
    <CommonSection title="Fill out this form to reserve a free inspection " />

    <Form className='form-exchange' onSubmit={submitHandler}>
      <div className='form-out'>
        <div className='form-in'>
          <Col>
            <div className='form__row'>


              <Row >
                <Col className='left-side'>
                  <FormGroup>
                    <div className='date-container'>
                      <label className='section__title'>Date of Inspection</label>
                      <input id='date' type="text" placeholder='dd/mm/yyyy' />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className='location-container'>
                      <label className='section__title'>Location</label>
                      <select className='select-input'>
                        <option>Choose a location</option>
                        <option>Mostar</option>
                        <option>Sarajevo</option>
                        <option>Banja Luka</option>
                        <option>Tuzla</option>
                      </select>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className='name-container'>
                      <label className='section__title'>First and Last name</label>
                      <input id='flname' type="text" placeholder='John Doe' />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className='email-container'>
                      <label className='section__title'>Email</label>
                      <input id='email' type="text" placeholder='someone@email.com' />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className='brand-container'>
                      <label className='section__title'>Brand</label>
                      <input id='brand' type="text" placeholder='' />
                    </div>
                  </FormGroup>
                </Col>

                <Col className='right-side'>
                  <FormGroup>
                    <div className='state-container'>
                      <label className='section__title'>State of your vehicle</label>
                      <textarea
                        rows={4}
                        type="textarea"
                        className="state-text-area"
                        placeholder="Type here"
                      ></textarea>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className='model-container'>
                      <label className='section__title'>Model</label>
                      <input id='model' type="text" placeholder='' />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className='year-container'>
                      <label className='section__title'>Year</label>
                      <input id='year' type="text" placeholder='' />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className='price-container'>
                      <label className='section__title'>Asking price</label>
                      <input id='price' type="text" placeholder='' />
                    </div>
                  </FormGroup>
                </Col>

              </Row>
            </div>
            <div className='btn-container-exchange'>
              <button className='btn btn-success mb-2 w-25' onClick={successfulReserve}>Reserve</button>
              <button className='btn btn-warning mb-2 w-25'>
                <Link to='/shop' className='back'> <i className="ri-arrow-left-line"></i> Back </Link>
              </button>
            </div>
          </Col>
        </div>
      </div>
    </Form>

    <NotificationContainer />

  </Helmet>
}

export default Exchange