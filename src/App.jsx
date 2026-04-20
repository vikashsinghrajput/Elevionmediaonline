import { useState } from 'react'
import Home from './component/Home/Home'
import About from './component/About/About'
import Header from './component/Layout/Header'
import { Route, Routes } from 'react-router-dom'
import PricingSection from './component/Pricing/PricingSection'

function App() {
  return (
   <>
   <Header/>
 {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}

<PricingSection/>
   </>
  )
}

export default App
