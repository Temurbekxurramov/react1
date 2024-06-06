import React from 'react'
import './HeroPage.css'
import herocha from "../../assets/hero.png"
import Button from '../../Components/Button/Button'
import Navbar from '../../Components/Navbar/Navbar'

export default function HeroPage() {
  return (
    <div>
       <div className='hero'>
    <div className='container hero__container'>
      <div className='hero__box'>
        <h1 className='hero__title'>Quality cleaning for your home</h1>
        <p className='hero__text'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
           <span className='hero__span'>
           <Button/>
           <Navbar/>
        
           </span>
         
      </div>
      <img className='herocha' src={herocha} alt="" />

    </div>

   </div>
    </div>
  )
}
