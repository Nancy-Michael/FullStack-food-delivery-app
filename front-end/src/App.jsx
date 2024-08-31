import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Logingpopup from './components/LoginPopup/Logingpopup'


const App = () => {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {showPopup ? <Logingpopup setShowPopup={setShowPopup} /> : null}
      <div className="app">
        <Navbar setShowPopup={setShowPopup} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='order' element={<PlaceOrder />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
