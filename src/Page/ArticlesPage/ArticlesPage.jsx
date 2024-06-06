import React from 'react'
import './ArticlesPage.css'
import Button from '../../Components/Button/Button'
import  nimacha from '../../assets/nimacha.png'

export default function ArticlesPage() {
  return (
    <div>
      <div className="articles">
    <div className='container articles__container'>
      <img src={nimacha} alt="" />
      <div className="articles__box">
        <h6 className="articles__title">Covid-19 sanitization</h6>
        <h1 className="articles__title_name">We follow guidelines to keep you safe from the COVID-19 virus</h1>
        <p className="articles__text">Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
        <Button />
      </div>

    </div>
   </div>
  
    </div>
  )
}
