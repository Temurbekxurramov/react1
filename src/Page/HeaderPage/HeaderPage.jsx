import React from 'react'
import './HeaderPage.css'
import Button from '../../Components/Button/Button'
import imgcha from '../../assets/img.png'


export default function HeaderPage() {
  return (
    <div>
       <div className='header'>
    <div className='container header__container'>
      <div className='header__left'>
    
      <img src={imgcha} alt="" />
        <ul className='header__list'>
          <li className='header__item'><a className='header__link' href="#">home</a></li>
          <li className='header__item'><a className='header__link' href="#">about</a></li>
          <li className='header__item'><a className='header__link' href="#">services</a></li>
          <li className='header__item'><a className='header__link' href="#">articles</a></li>
          <li className='header__item'><a className='header__link' href="#">contact</a></li>

        </ul>

      </div>
      <div className='header__right'>
        <h3 className='header__title'>Cart (

)</h3>
        <Button/>
          

      </div>

    </div>

   </div>
    </div>
  )
}
