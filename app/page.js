// import Image from 'next/image'
"use client"

import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Herosection from './components/HeroSection.jsx'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Herosection />
    </div>
  )
}
