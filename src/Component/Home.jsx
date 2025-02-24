import React from 'react'
import Slider from './Slider'
import Intro from './Intro'
import Achievements from './Achievements'
import WhyChooseUs from './WhyChooseUs'
import WhatsApp from './WhatsApp'

export default function Home() {
  return (
    <div>
      <Slider/>
      <Intro/>
      <Achievements/>
      <WhyChooseUs/>
      <WhatsApp/>
    </div>
  )
}
