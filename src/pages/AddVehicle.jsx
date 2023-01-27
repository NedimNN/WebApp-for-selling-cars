import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Form, FormGroup, Row } from 'reactstrap'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/addvehicle.css'

const AddVehicle = () => {
  const navigate = useNavigate();

  const submitHandler = event => {
    event.preventDefault();
  }
  function successfulInsert() {
    NotificationManager.success('The vehicle is now available in the shop !', 'Successfully added a vehicle',);
    setTimeout(() => {
      NotificationManager.removeAll();
      navigate('/home', { replace: true });
    }, 3000);
  }


  return <Helmet title='Insert'>
    <CommonSection title="Fill out this form to add a new vehicle " />

    <Form className='form-vehicle' onSubmit={submitHandler}>
      <div className='form-out'>
        <div className='form-in'>
          <Col>
            <div className='form__row'>

              <Row >
                <Col className='left-side'>
                  <FormGroup>
                    <div className='name-container'>
                      <label className='section__title'>Name of vehicle</label>
                      <input id='vehicleName' type="text" placeholder='' />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className='fuel-container'>
                      <label className='section__title'>Type of fuel</label>
                      <select className='select-input'>
                        <option>Choose a fuel type</option>
                        <option>Electric</option>
                        <option>Premium Unleaded Petrol</option>
                        <option>Diesel</option>
                        <option>Premium Gasoline</option>
                      </select>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className='mileage-container'>
                      <label className='section__title'>Mileage</label>
                      <input id='flname' type="text" placeholder='In kilometers or miles' />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className='brand-container'>
                      <label className='section__title'>Brand</label>
                      <input id='brand' type="text" placeholder='' />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className='hp-container'>
                      <label className='section__title'>Horse power</label>
                      <input id='horsePower' type="text" placeholder='' />
                    </div>
                  </FormGroup>

                </Col>


                <Col className='right-side'>
                  <FormGroup>
                    <div className='desc-container'>
                      <label className='section__title'>Description</label>
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
                      <label className='section__title'>Price</label>
                      <input id='price' type="text" placeholder='' />
                    </div>
                  </FormGroup>
                </Col>

              </Row>
            </div>
            <div className='btn-container-exchange'>
              <button className='btn btn-success mb-2 w-25' onClick={successfulInsert}>Add Vehicle</button>
              <button className='btn btn-warning mb-2 w-25'>
                <Link to='/home' className='back'> <i className="ri-arrow-left-line"></i> Back </Link>
              </button>
            </div>
          </Col>
        </div>
      </div>
    </Form>


    <NotificationContainer />
  </Helmet>
}

export default AddVehicle