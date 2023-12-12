import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hitchhiker from './Hitchhiker.jsx'
import Cook from './Cook.jsx'
import Home from './Home.jsx'
import NotFound from './NotFound.jsx'
import './App.css'

function App() {

  return (
  <>
    <div className='content'>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/hitchhiker" element={<Hitchhiker />} />
          <Route path="/cook" element={<Cook />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </>
  )
}

export default App
