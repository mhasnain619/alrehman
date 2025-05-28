import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from './Components/Header/Header'
import ImageSlider from './Components/Slider/Slider'
import HeroSlider from './Components/Slider/Slider'
import BookingFilter from './Components/BookingFilter/BookingFilter'

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <HeroSlider />
      <BookingFilter />
    </>
  )
}

export default App
