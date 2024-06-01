
import './navbar.css'
import salom from "../../assets/tell.png"



function Navbar() {


  return (
    <>
       <div className='navbarcha'>
        <img className='telcha' src={salom} alt="" />
     
       <span>
       <h4 className='navbar__title'>Call us now</h4>
        <p className="navbar__text">(414) 567 - 2109</p>
       </span>

       </div>
    </>
  )
}

export default Navbar