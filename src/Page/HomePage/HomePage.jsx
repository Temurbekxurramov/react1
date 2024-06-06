import React from 'react'
import './HomePage.css'
import Button from '../../Components/Button/Button'
 import home1 from '../../assets/home1.png'
 import home2 from '../../assets/home2.png'
 import home3 from '../../assets/home3.png'

export default function HomePage() {
  return (
    <div>
          <div className="home">
    <div className="container home__container">
      <div className="home__box">
      <h1 className="home__title">Articles & resources</h1>
      <span className="home__span">
        <Button/>
        <p className="home__text">Browse articles</p>
      </span>
      </div>
      <ul className="home__list">
        <li className="home__item">
          <img className='home1' src={home1} alt="" />
          <h4 className="home__title_name">8 best vacuum cleaners to clean any mess for your home in 2022</h4>
          <p className="home__text_name">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
          <span className="home__span_name">
            <p className="home__text_inform">Jan 28, 2022</p>
            <img className='home3' src={home3} alt="" />
          </span>
        </li>
        <li className="home__item">
          <img className='home1' src={home2} alt="" />
          <h4 className="home__title_name">How to properly disinfect your phone and other electronics</h4>
          <p className="home__text_name">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
          <span className="home__span_name">
            <p className="home__text_inform">Feb 1, 2022</p>
            <img className='home3' src={home3} alt="" />
          </span>
        </li>
      </ul>
     

    </div>
   </div>
      
    </div>
  )
}
