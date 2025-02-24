import React from 'react'
import IntroPage from './IntroPage'
import Location from './Location'
import Client from './Client'
import Team from './Team'

export default function CompanyOverView() {
  return (
    <div>
      <IntroPage namm="Company Overview"/>
      <Team/>
      <Location/>
      <Client/>
    </div>
  )
}
