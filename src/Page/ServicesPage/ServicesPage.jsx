import React from 'react'
import './ServicesPage.css'
import services from '../../assets/services.png'
import services1 from '../../assets/services1.png'
import services2 from '../../assets/services2.png'


export default function ServicesPage() {
  return (
    <div>
      <div className="services">
    <div className='container services__container'>
     <span className='services__span'>
     <h1 className="services__title">our services</h1>
      <p className="services__text">Explore services</p>
      
     </span>
     <ul className="services__list">
      <li className="services__item">
        <img src={services} alt="" />
        <h1 className="services__title_name">House cleaning</h1>
        <p className="services__text_name">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
      </li>
      <li className="services__item">
        <img src={services1} alt="" />
        <h1 className="services__title_name">Office cleaning</h1>
        <p className="services__text_name"> Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est..</p>
      </li>
      <li className="services__item">
        <img src={services2} alt="" />
        <h1 className="services__title_name">Industrial cleaning</h1>
        <p className="services__text_name">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est. est.</p>
      </li>
     </ul>

    </div>
   </div>
    </div>
  )
}
