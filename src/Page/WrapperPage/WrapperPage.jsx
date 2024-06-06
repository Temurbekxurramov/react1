  import Button from '../../Components/Button/Button'
import './WrapperPage.css'




  import React from 'react'
  
  export default function WrapperPage() {
    return (
      <>< div className="wrapper">
        <div className="container wrapper__container">
  <ul className="wrapper__list">
    <li className="wrapper__item">
      <h1 className="wrapper__title">Quality cleaning for your home</h1>
      <p className="wrapper__text">Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
    </li>
    <li className="wrapper__item">
      <h1 className="wrapper__title">Contact us</h1>
      <p className="wrapper__text">1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
      <p className="wrapper__number">(414) 567 - 2109</p>
      <p className="wrapper__email">contact@cleaning.com</p>
    </li>
    <li className="wrapper__item">
      <h1 className="wrapper__title">Hours</h1>
      <h3 className='wrapper__title_name'>Monday to Friday</h3>
      <p className="wrapper__text">6:00 AM - 9:00 PM</p>
      <h3 className='wrapper__title_name'>Saturday & Sunday</h3>
      <p className="wrapper__text">8:00 AM - 8:00 PM</p>
    </li>
    <li className="wrapper__item">
      <h1 className="wrapper__title">Get a free estimate</h1>
      <p className="wrapper__number_name">(414) 567 - 2109</p>
      <p className="wrapper__text">Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
      <Button/>
    </li>
  </ul>

</div>
      </div>
        
      </>
    )
  }
  

