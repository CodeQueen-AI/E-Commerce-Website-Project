import React from 'react'
import Home from './components/Home'
import Service from './components/Services'
import Promotions from './components/Promotions'
import Category from './components/category'
import Gift from './components/gift'
const page = () => {
  return (
    <div>
      <Home/>
      <Service />
      <Promotions />
      <Category />
      <Gift />
    </div>
  )
}

export default page



