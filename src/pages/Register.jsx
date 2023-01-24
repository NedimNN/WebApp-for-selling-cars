import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import 'react-notifications/lib/notifications.css';
import '../styles/register.css'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { Link } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const submitHandler = event => {
    event.preventDefault();
  }
  function successfulReg() {
    NotificationManager.success('Please log in !', 'Successfully registered');
    setTimeout(() => {
      NotificationManager.removeAll();
      navigate('/login', { replace: true });
    }, 3000);
  }



  return <Helmet title='Register'>
    <CommonSection title='Enter your information here' />
    <Form className='register__form' onSubmit={submitHandler}>
      <div className='form__container mb-5'>
        <div className='form__border'>
          <div className='form__container2'>
            <Col>
              <FormGroup>
                <label className='section__title'>First name</label>
                <div className='username-container'>
                  <input id='fname' type="text" placeholder='First name' />

                </div>
              </FormGroup>
              <FormGroup>
                <label className='section__title'>Last name</label>
                <div className='username-container'>
                  <input id='lname' type="text" placeholder='Last name' />

                </div>
              </FormGroup>

              <FormGroup>
                <label className='section__title'>Email</label>
                <div className='username-container'>
                  <input id='email' type="text" placeholder='someone@email.com' />

                </div>
              </FormGroup>
              <FormGroup>
                <label className='section__title'>Phone number</label>
                <div className='username-container'>
                  <input id='phone' type="text" placeholder='000/000-000' />

                </div>
              </FormGroup>
            </Col>
            <Col className='usernamePass'>

              <FormGroup>
                <label className='section__title'>Username</label>
                <div className='username-container'>
                  <input id='username' type="text" placeholder='Username' />

                </div>
              </FormGroup>
              <FormGroup>
                <label className='section__title'>Password</label>
                <div className="pwd-container">
                    <input
                      id='password'
                      name="pwd"
                      placeholder="Enter Password"
                    />
                    <input
                      id='confPassword'
                      name="pwd"
                      placeholder="Confirm Password"
                    />
                </div>

              </FormGroup>
            </Col>
          </div>
          <div className='btn-container'>
            <button className='btn btn-success mb-2' onClick={successfulReg}>Register</button>
            <button className='btn btn-warning mb-2'>
              <Link to='/home' className='back'> <i className="ri-arrow-left-line"></i> Back </Link>
            </button>
          </div>


        </div>
        <NotificationContainer />
      </div>
    </Form>

  </Helmet >
}

export default Register