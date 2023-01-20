import React from 'react'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../../styles/employee.css';
import emp01 from '../../assets/images/stock-img/emp-1.jpg'
import emp02 from '../../assets/images/stock-img/emp-2.jpg'
import emp03 from '../../assets/images/stock-img/emp-3.jpg'
import emp04 from '../../assets/images/stock-img/emp-4.jpg'


const Our_Employees = [
    {
        name: 'John Doe',
        experience: '3 years of experience',
        fbUrl: '#',
        twitUrl: '#',
        instaUrl: '#',
        imgUrl: emp01,
        phoneNumber: '+387 61/098-223'
    },
    {
        name: 'Jane Doe',
        experience: '2 years of experience',
        fbUrl: '#',
        twitUrl: '#',
        instaUrl: '#',
        imgUrl: emp02,
        phoneNumber: '+387 61/759-883'
    },
    {
        name: 'Lisa McDowell',
        experience: '5 years of experience',
        fbUrl: '#',
        twitUrl: '#',
        instaUrl: '#',
        imgUrl: emp03,
        phoneNumber: '+387 61/210-918'
    },
    {
        name: 'Patrick Jane',
        experience: '7 years of experience',
        fbUrl: '#',
        twitUrl: '#',
        instaUrl: '#',
        imgUrl: emp04,
        phoneNumber: '+387 61/256-328'
    },
]


const Employees = () => {
  return (
    <>
    {
        Our_Employees.map((item,index)=> (
            <Col lg='3' md='3' sm='4' xs='6' key={index} className='mb-4'>
                <div className="single__member">
                    <div className="single__member-img">
                        <img src={item.imgUrl} alt="" className='w-100' />
                        <div className="single__member-socials">
                            <Link to={item.fbUrl}><i className="ri-facebook-circle-fill"></i></Link>
                            <Link to={item.twitUrl}><i className="ri-twitter-fill"></i></Link>
                            <Link to={item.instaUrl}><i className="ri-instagram-fill"></i></Link>
                        </div>
                    </div>
                    <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                    <h4 className='section__description text-center'>{item.experience}</h4>
                    <h4 className='section__description text-center'><i className="ri-phone-line"></i>  {item.phoneNumber}</h4>
                </div>
            </Col>
        ))
    }
    </>
  )
}

export default Employees