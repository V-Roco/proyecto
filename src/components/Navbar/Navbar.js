import React from 'react'
import "./Navbar.css";
import Logo from "../../media/logo.jpg"

const Navbar = ({isScrolling}) => {
  const toTheTop = () => {
    window.scrollTo({top:0, left:0, behavior: "smooth"});
  }
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling": null }`}>
      <div className='navbar.logo' onClick={toTheTop}>QBonitotodo
      <img src={Logo} />
       </div>
    </nav>
  )
}
export default Navbar