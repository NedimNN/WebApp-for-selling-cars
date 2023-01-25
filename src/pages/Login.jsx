import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import 'react-notifications/lib/notifications.css';
import '../styles/login.css'
import showPwdImg from '../assets/images/show-password.svg';
import hidePwdImg from '../assets/images/hide-password.svg';
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { Link } from 'react-router-dom'
import userData from '../assets/data/userData'

window.username = "";

const Login = () => {
    const navigate = useNavigate();
    const [pwd, setPwd] = useState('');
    const [username, setUsername] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const submitHandler = event => {
        event.preventDefault();
    }
    function successfulLogin() {
        
        userData.forEach((item) => {
            if (pwd === item.password && username === item.userName) {
                window.username = item.userName;
            }
        })
        if (window.username === "") {
            NotificationManager.warning('If you forgot your password try clicking the button under the form','Wrong username or password !', 3000);
            setTimeout(() => {
                NotificationManager.removeAll();
            }, 3000);
        }
        else {
            NotificationManager.success('Successfully logged in !', 'Welcome');
            setTimeout(() => {
                NotificationManager.removeAll();
                navigate('/');
            }, 3000);

        }


    }

    return <Helmet title="Login">
        <CommonSection title="Please login here" />
        <Form className='form' onSubmit={submitHandler}>
            <div className='form-container mb-5'>
                <div className='form-container2'>

                    <FormGroup>
                        <label className='section__title'>Username</label>
                        <div className='username-container'>
                            <input id='username' type="text" placeholder='Username'
                                value={username} onChange={e => setUsername(e.target.value)} />

                        </div>
                    </FormGroup>
                    <FormGroup>
                        <label className='section__title'>Password</label>
                        <div className="pwd-container-login">
                            <input
                                id='password'
                                name="pwd"
                                placeholder="Enter Password"
                                type={isRevealPwd ? "text" : "password"}
                                value={pwd}
                                onChange={e => setPwd(e.target.value)}
                            />
                            <img
                                title={isRevealPwd ? "Hide password" : "Show password"}
                                src={isRevealPwd ? hidePwdImg : showPwdImg}
                                onClick={() => setIsRevealPwd(prevState => !prevState)}
                                alt=""
                            />
                        </div>
                        <div className='forgot mt-1 mb-1'>
                            <span className='forgot-span'>Forgot your password?</span>
                            <Link to='/help' className='forgot-link'>Click here!</Link>
                        </div>
                    </FormGroup>
                    <div className='btn-container-login'>
                        <button className='btn btn-success mb-2' onClick={successfulLogin}>Login</button>
                        <button className='btn btn-warning mb-2'>
                            <Link to='/home' className='back'> <i className="ri-arrow-left-line"></i> Back </Link>
                        </button>
                    </div >
                    <NotificationContainer />
                </div>
            </div>

        </Form>

    </Helmet>
}

export default Login