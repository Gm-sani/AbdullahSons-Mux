import React, { useEffect, useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Footer from './Component/Footer'

import CompanyOverView from './Component/CompanyOverView'
import OurServices from './Component/OurServices'

import {
  Routes,
  Route
} from "react-router-dom";
import Event from './Component/Event'
import Splash from './Component/Splash'

// import './App.css'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Splash screen will be visible for 3 seconds
  }, []);

  if (loading) {
    return <Splash />;
  }
 

  return (
    <div className='bg-slate-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='Services' element={ <OurServices />}/>
        <Route path='OverView' element={ <CompanyOverView />}/>
        <Route path='Event' element={ <Event />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
