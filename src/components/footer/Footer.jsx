import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
  return (    
    <div className='footer'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="footerItem">
                        <img src="images/footer_Logo.jpg" alt="logo" className="footerLogo" />                                          
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>                        
                    </div>  <br/> <br/>    
                </div>  
                <div className="col-md-2">
                    <div className="footerItem">
                        <h6>SUPPORT</h6>
                        <div className='title-line'><hr className='bg-success lint'/></div>
                        <div className='footer-txt'>
                            <li>Privacy Policy</li><br/>
                            <li>Terms & Conditions</li><br/>
                            <li>Customer Service</li><br/>
                            <li>Return Policy</li>
                        </div>   
                    </div>      
                </div><br/>   
                <div className="col-md-2">
                    <div className="footerItem">
                        <h6>Useful Links</h6>
                        <div className='title-line'><hr className='bg-success lint'/></div>
                        <div className='footer-txt'>
                            <li>Home</li><br/>
                            <li>About Us</li><br/>
                            <li>Products</li><br/>
                            <li>Blogs</li><br/>
                            <li>Contacts</li>                           
                        </div>   
                    </div>      
                </div> <br/>
                <div className="col-md-4">
                    <div className="footerItem">
                        <h6>GET IN TOUCH</h6>
                        <div className='title-line'><hr className='bg-success lint'/></div>
                        <div className='footer-txt'>
                            <li>Address: University of Nigeria Nsukka Enugu, Nigeria.</li>
                            <li>Telephone Enquiry: +2348032744865</li>
                            <li>ogagro1759@gmail.com</li><br/>
                            <li>Open: <span className='text-warning'>8:00 AM</span> - Close: <span className='text-warning'>4:00 PM</span></li>
                            <li>Saturday - Sunday: Close</li>
                        </div>
                            <h4>
                                <i class="bi bi-whatsapp text-success"></i>&nbsp;&nbsp;&nbsp;
                                <i class="bi bi-instagram text-danger"></i>&nbsp;&nbsp;&nbsp;
                                <i class="bi bi-twitter text-primary"></i>&nbsp;&nbsp;&nbsp;
                            </h4>                      
                        </div>
                    </div>      
                </div>            
            </div>
            <hr className='bg-success'/>
            <div className='foot'>All rights reserved | Powered by <span className='text-primary    '>GigoPlanet</span> Services</div>
        </div>   
        
    )
}
