import { NavLink } from 'react-router-dom'
import './Cook.css'

function Home() {

  return (
  <>
    <h1>Texas Chainsaw Massacre Game Soundboard</h1>
    <br/>
    <ul>
      <li><NavLink to="/hitchhiker">Hitchhiker</NavLink></li>
      <li><NavLink to="/cook">Cook</NavLink></li>
      <li><NavLink to="/leatherface">Leatherface</NavLink></li>
    </ul>
  </>
  )
}

export default Home
