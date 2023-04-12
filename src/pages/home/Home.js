import React from 'react'
import './Home.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from '../../components/carousel/Carousel';
import About from '../about/About';

export default function Home() {
  return (
    <>        
        <div className='container'>
            <Carousel />
            <About/>
        </div>
    </>
  )
}
