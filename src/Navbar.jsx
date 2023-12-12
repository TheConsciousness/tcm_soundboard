import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

  function closeNavbar() {
    // Find the checkbox element and uncheck it
    var checkbox = document.getElementById("check");
    checkbox.checked = false;
  }

  return (
    <>
    <nav>
      <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkBtn">
        <i className="fas fa-bars fa-2xl"></i>
      </label>
      <label className="logo"><NavLink to="/" activeclassname="active" onClick={closeNavbar}>TCM Soundboard</NavLink></label>
      <ul>
        <li><NavLink to="/hitchhiker" activeclassname="active" onClick={closeNavbar}>Hitchhiker</NavLink></li>
        <li><NavLink to="/cook" activeclassname="active" onClick={closeNavbar}>Cook</NavLink></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
