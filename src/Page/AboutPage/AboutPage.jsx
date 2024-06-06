import React from 'react'
import './AboutPage.css'
import Button from '../../Components/Button/Button'
import licha from '../../assets/licha.png'
import licha1 from '../../assets/licha1.png'
import licha2 from '../../assets/licha2.png'

export default function AboutPage() {
  return (
    <div>
        
   <div className='about'>
    <div className='container about__container'>
        <h1 className="about__title">About Us</h1>
        <p className="about__text">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        <div className="about__box">
        <ul className="about__list">
        <li className="about__item">
            <img src={licha} alt="" />
              <h1 className="about__title_name">1. Schedule online</h1>
              <p className="about__text_name">Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
          </li>
          <li className="about__item">
            <img src={licha1} alt="" />
              <h1 className="about__title_name">2. Pay online easily</h1>
              <p className="about__text_name">Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
          </li>
          <li className="about__item">
            <img src={licha2} alt="" />
              <h1 className="about__title_name">3. Get your house cleaned</h1>
              <p className="about__text_name">Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.d n.</p>
          </li>
        </ul>
    <span className='about__span'>
    <Button/>
        <p className="about__text1">Explore services</p>
    </span>
        </div>

    </div>

   </div>
    </div>
  )
}
