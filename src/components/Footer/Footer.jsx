import React from 'react';
import { Container, Row, Col,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../../styles/footer.css";

const quickLinks = [
  {
    path:'/about',
    display: 'About'
  },
  {
    path:'#',
    display: 'Privacy Policy'
  },
]

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='5' md='5' sm='12'>
          <div className="footer__logo">
            <h1>
              <Link to='/home' className='linkToHome'>
                <i className="ri-roadster-line"></i>
                <span> Autosalon </span>
              </Link>
            </h1>
          </div>
          <p className="footer__logo-content">
          We are commited to ensure that buying cars becomes as easiest as possible, so we'd like to welcome you to our website where everything you need for buying a car is here, from exchanging your old car for a new one , to just browsing good vehicles.
          </p>
        </Col>
        <Col lg='2' md='5' sm='6'>
          <div className="mb-4">
            <h5 className="footer__links-title">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item,index)=> (
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>
        <Col lg='4' md='5' sm='6'>
          <div className="mb-5 office__info-div">
          <h5 className="footer__links-title  mb-4">Main Office</h5>
          <p className="office__info">Bišće polje bb, Mostar 88100, Bosnia & Herzegovina</p>
          <p className="office__info">Phone: +387-032-552</p>
          <p className="office__info">Email: autosalon@gmail.com</p>
          <p className="office__info">Working hours: 9am-6pm</p>
          </div>
        </Col>

      </Row>
    </Container>

  </footer>
}

export default Footer