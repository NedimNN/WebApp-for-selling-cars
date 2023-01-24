import React,{useRef} from 'react';
import { Container,Row,Col } from 'reactstrap';
import { Link , NavLink } from 'react-router-dom';
import "../../styles/header.css";

const navigationLinks = [
  {
    path:'/home',
    display : 'Home'
  },
  {
    path:'/about',
    display : 'About'
  },
  {
    path:'/shop',
    display : 'Shop'
  },
]

const Header = () => {

  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');


  return <header className="header">
    <div className="header__top">
      {/*--- header__top ---*/}
      <Container>
        <Row>
        <Col lg='6' md='6' sm='6'>
            <div className="header__top__left">
              
            <Link to='/login' className='login'> <i className="ri-login-circle-line"></i> Login </Link>
            <Link to='/register' className='register'> <i className="ri-user-3-line"></i> Register </Link>

            </div>
          </Col>
          <Col lg='6' md='6' sm='6'>
            <div className="header__top__right">
              <span>Need some help?</span>
              <span className="header__top__help">
              <i className="ri-phone-line"></i> +387-62-325-328
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
      {/*--- header__middle ---*/}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg='3' md='3' sm='4' className='logoDiv'>
            <div className="logo">
              <h1>
                <Link to='/home' className='linkToHome'>
                  <i className="ri-roadster-line"></i>
                  <span> Autosalon </span>
                </Link>
              </h1>
            </div>
            </Col>

            <Col lg='3' md='3' sm='4'>
              <div className="header__location">
                <span><i className="ri-earth-fill"></i></span>
                <div className="header__location-content">
                  <h4>Bosnia & Herzegovina</h4>
                  <h6>Mostar 88000</h6>
                </div>
              </div>
            </Col>
            <Col lg='3' md='3' sm='4'>
              <div className="header__time">
                <span><i className="ri-time-line"></i></span>
                <div className="header__time-content">
                  <h4>Monday - Friday</h4>
                  <h6>9am - 6pm</h6>
                </div>
              </div>
            </Col>
            <Col lg="2"  md="3" sm="0" className='btnDiv'>
              <button className="btn__cart">
                <Link to='/cart'>
                <span><i className="ri-shopping-cart-line"></i> Cart </span>
                </Link>
              </button>
            </Col>

          </Row>
        </Container>
      </div>
      {/*--- header__navigation ---*/}
      <div className="header__navigation">
        <Container>
          <div className="navigation__wrapper">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {
                  navigationLinks.map((item,index)=> (
                    <NavLink to={item.path} key={index} className={navClass=> 
                      navClass.isActive ? 'nav__active nav__item' : 'nav__item' }>{item.display}</NavLink>
                  ))
                }
                <NavLink to='/addvehicle' className={navClass=> 
                      navClass.isActive ? 'nav__active nav__item' : 'nav__item' }> Add Vehicle</NavLink>
              </div>
            </div>
            <div className="nav__right__search">
              <div className="search__box">
                <span><i className="ri-search-2-line"></i></span>
                <input type="text" placeholder="Search"/>
              </div>
            </div>
          </div>
        </Container>
      </div>

  </header>
}

export default Header