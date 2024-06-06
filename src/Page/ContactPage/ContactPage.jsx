import React from 'react'
import './ContactPage.css'
import Button from '../../Components/Button/Button'
import Navbar from '../../Components/Navbar/Navbar'

export default function ContactPage() {
  return (
    <div>
         <div className="contact">
    <div className="container contact__container">
      <div className="contact__left">
        <h1 className="contact__title">Contact Us</h1>
        <p className="contact__text">In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
        <Navbar/>
        <h6 className="contact__title_name">Not convinced yet?</h6>  
        <p className="contact__text">In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
        <p className="contact__text_name">Browse our packages</p>
      </div>
      <div className="contact__right">
        <ul className="contact__list">
          <li className="contact__item">
            <h5 className="contact__title_inform">Full name</h5>
            <input type="text"required  />
          </li>
          <li className="contact__item">
            <h5 className="contact__title_inform">phone number</h5>
            <input type="number"required  />
          </li>
          <li className="contact__item">
            <h5 className="contact__title_inform">address</h5>
            <input type="text"required  />
          </li>
          <li className="contact__item">
            <h5 className="contact__title_inform">email</h5>
            <input type="text"required  />
          </li>
          <li className="contact__item">
            <h5 className="contact__title_inform">requeted services</h5>
            <input type="text"required  />
          </li>
          <li className="contact__item">
            <h5 className="contact__title_inform">day of servise</h5>
            <input type="text"required  />
          </li>
          <li className="contact__item">
            <h5 className="contact__title_inform">add a note</h5>
            <textarea name="" id=""></textarea>
          </li>
        </ul>
        <Button/>
      </div>

    </div>
   </div>
   

    </div>
  )
}
