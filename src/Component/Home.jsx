import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from './Slider';
import Intro from './Intro';
import Achievements from './Achievements';
import WhyChooseUs from './WhyChooseUs';
import WhatsApp from './WhatsApp';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const sections = gsap.utils.toArray("#Intro1, #WhyChooseUs3");
    const sections2 = gsap.utils.toArray("#Achievements2");

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
      <div><Slider /></div>
      <div id='Intro1'><Intro /></div>
      <div id='Achievements2'><Achievements /></div>
      <div id='WhyChooseUs3'><WhyChooseUs /></div>
      <WhatsApp />
    </div>
  );
}
