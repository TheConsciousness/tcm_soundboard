import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Navbar />
      <App />
    </React.StrictMode>
  </Router>,
)
