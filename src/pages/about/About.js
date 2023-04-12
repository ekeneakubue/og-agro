import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className='container'>        
            <div className='row about-cont'>
                <div className='col-md-6'>
                    <h2>WHO WE ARE!</h2><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <br/>
                    <h2>OUR MISSION!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>

                <div className='col-md-6'>
                    <div className='about-img'>
                        <img className='about-img img-fluid' src='images/about-img.avif' alt='about-img'/>
                    </div>
                </div>
            </div>    
        </div>
    )
}
