import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
  return (
    <div className='bg-dark text-light container-fluid'>
        <Container>
            <Row className='foot-body'>
                <Col md={5}>
                    <h6>LOGO</h6>
                    <div className='footer-txt'>                   
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </div>
                </Col>

                <Col md={3}>
                    <h6>SUPPORT</h6>
                    <div className='footer-txt'>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Customer Service</li>
                        <li>Return Policy</li>
                    </div>                                       
                </Col>

                
                <Col md={4}>
                    <h6>GET IN TOUCH</h6>
                    <div className='footer-txt'>
                        <li>Address: University of Nigeria Nsukka Enugu, Nigeria.</li>
                        <li>Telephone Enquiry: +2348032744865</li>
                        <li>ogagro1759@gmail.com</li><br/>
                        <li>Open: <span className='text-warning'>8:00 AM</span> - Close: <span className='text-warning'>4:00 PM</span></li>
                        <li>Saturday - Sunday: Close</li>
                    </div>
                </Col>            
            </Row>
            <hr className='bg-light'/>
            <div className='row text-primary'>
                <div className='col-8'>og<span className='text-light'>Agro</span><br/></div>            
                <div className='col'>
                    <h6>
                        <i class="bi bi-whatsapp text-success"></i>&nbsp;&nbsp;&nbsp;
                        <i class="bi bi-instagram text-danger"></i>&nbsp;&nbsp;&nbsp;
                        <i class="bi bi-twitter text-primary"></i>&nbsp;&nbsp;&nbsp;

                    </h6>
                </div>
            </div>
        </Container>
    </div>
  )
}
