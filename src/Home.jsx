import { NavLink } from 'react-router-dom'
import './Home.css?v2'

function Home() {

  return (
  <>
    <h1>Texas Chainsaw Massacre Game Soundboard</h1>
    <br/>
    <ul className='homeLinks'>
      <li><NavLink to="/hitchhiker">Hitchhiker</NavLink></li>
      <li><NavLink to="/cook">Cook</NavLink></li>
      <li><NavLink to="/leatherface">Leatherface</NavLink></li>
    </ul>
  </>
  )
}

export default Home
