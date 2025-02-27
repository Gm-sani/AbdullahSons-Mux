import React, { useEffect } from 'react'
import IntroPage from './IntroPage'
import Location from './Location'
import Client from './Client'
import Team from './Team'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CompanyOverView() {

  useEffect(() => {
    const sections = gsap.utils.toArray("#Team1, #Client3");
    const sections2 = gsap.utils.toArray("#Location2");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 100, x: -200, rotate: -10 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          x: 0,
          rotate: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Animation starts when the section is 80% in viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    sections2.forEach((section2) => {
      gsap.fromTo(
        section2,
        { autoAlpha: 0, x: 100, y: -100, rotate: -10 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          x: 0,
          rotate: 0,
          scrollTrigger: {
            trigger: section2,
            start: "top 80%", // Animation starts when the section is 80% in viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);


  return (
    <div>
      <IntroPage namm="Company Overview"/>
     
     <div id='Team1'> <Team/> </div> 
     <div id='Location2'> <Location/> </div> 
     <div id='Client3'> <Client/>  </div> 
    </div>
  )
}
