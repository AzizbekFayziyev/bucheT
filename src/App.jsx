import React from 'react'
import Navbar from './components/Navbar'
import Restaurants from './components/Restaurants'
import Shops from './components/Shops'

export default function App() {
  return (
    <>
      <Navbar />
      <Shops />
      <Restaurants />
    </>
  )
}
