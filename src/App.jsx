

import './App.css'
import Button from './Components/Button/Button'
import Navbar from './Components/Navbar/Navbar'
import imgcha from "./assets/img.png"
import herocha from "./assets/hero.png"



function App() {
  <>
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
   <div className="wrapper">
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
   <div className="articles">
    <div className='container articles__container'>
      <img src="" alt="" />
      <div className="articles__box">
        <h6 className="articles__title">Covid-19 sanitization</h6>
        <h1 className="articles__title_name">We follow guidelines to keep you safe from the COVID-19 virus</h1>
        <p className="articles__text">Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
        <Button/>
      </div>

    </div>
   </div>
   <div className="services">
    <div className='container services__container'>
     <span className='services__span'>
     <h1 className="services__titlke">our services</h1>
      <p className="services__text">Explore services</p>
      
     </span>
     <ul className="services__list">
      <li className="services__item">
        <img src="" alt="" />
        <h1 className="services__title_name">House cleaning</h1>
        <p className="services__text_name">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
      </li>
      <li className="services__item">
        <img src="" alt="" />
        <h1 className="services__title_name">Office cleaning</h1>
        <p className="services__text_name"> Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est..</p>
      </li>
      <li className="services__item">
        <img src="" alt="" />
        <h1 className="services__title_name">Industrial cleaning</h1>
        <p className="services__text_name">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est. est.</p>
      </li>
     </ul>

    </div>
   </div>
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
          <img src="" alt="" />
          <h4 className="home__title_name">8 best vacuum cleaners to clean any mess for your home in 2022</h4>
          <p className="home__text_name">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
          <span className="home__span_name">
            <p className="home__text_inform">Jan 28, 2022</p>
            <img src="" alt="" />
          </span>
        </li>
        <li className="home__item">
          <img src="" alt="" />
          <h4 className="home__title_name">How to properly disinfect your phone and other electronics</h4>
          <p className="home__text_name">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
          <span className="home__span_name">
            <p className="home__text_inform">Feb 1, 2022</p>
            <img src="" alt="" />
          </span>
        </li>
      </ul>
     

    </div>
   </div>
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
   <div className='about'>
    <div className='container about__container'>
        <h1 className="about title">About Us</h1>
        <p className="about__text">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
        <div className="about__box">
        <ul className="about__list">
        <li className="about__item">
            <img src="" alt="" />
              <h1 className="about__title_name">1. Schedule online</h1>
              <p className="about__text_name">Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
          </li>
          <li className="about__item">
            <img src="" alt="" />
              <h1 className="about__title_name">2. Pay online easily</h1>
              <p className="about__text_name">Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
          </li>
          <li className="about__item">
            <img src="" alt="" />
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
   <div className="contact">
    <div className="container contact__container">
      <div className="contact__left">
        <h1 className="contact__title">Contact Us</h1>
        <p className="contact__text">In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
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
            <input type="text"required  />
          </li>
        </ul>
        <Button/>
      </div>

    </div>
   </div>
   
   
   </>
 
   

  return (
    <>
  


   
  
  
   
   
   
   
 
    </>
  )
}

export default App
