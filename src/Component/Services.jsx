import React from 'react'
import servicepic1 from './Pics/Rubber_o_Ring.png'
import servicepic2 from './Pics/OilSeal2.png'
import servicepic3 from './Pics/RubberCouplingBush3.png'
import servicepic4 from './Pics/RubberFoundations4.png'
import servicepic5 from './Pics/Rubber&PlasticCaster5.png'
import servicepic6 from './Pics/RubberCords6.png'
import servicepic7 from './Pics/RubberDiaphragm7.png'
import servicepic8 from './Pics/RubberHydraulicSeals8.png'
import servicepic9 from './Pics/RubberHydraulicPipes9.png'
import servicepic10 from './Pics/RubberSiliconParts10.png'
import servicepic11 from './Pics/TeflonRods11.png'
import servicepic12 from './Pics/TeflonSheets12.png'
import servicepic13 from './Pics/TeflonPipes13.png'
import servicepic14 from './Pics/TeflonCouplingBush14.png'
import servicepic15 from './Pics/FiberRods15.png'
import servicepic16 from './Pics/FiberSheets16.png'
import servicepic17 from './Pics/FiberRings17.png'
import servicepic18 from './Pics/PneumaticPipes18.png'
import servicepic19 from './Pics/Mechanical Pump Seals19.png'
import servicepic20 from './Pics/RubberSiliconSheets20.png'
import servicepic21 from './Pics/SiliconPipes21.png'
import servicepic22 from './Pics/SiliconBoots22.png'
import servicepic23 from './Pics/FilterCloth(Numda)23.png'
import servicepic24 from './Pics/ElectricalRubberSheets24.png'
import ServiceBox from './ServiceBox';

export default function Services() {
  return (
    <div className='bg-slate-50   pb-[10rem]'>
    <p className='text-[1rem] text-red-600 tracking-wider font-semibold text-center mt-4'>Our Services</p>
    <p className='text-[2rem] font-semibold mt-3 text-center'>Services We Provide</p>
    {/* -----------------------------------------Box row 1---------------------------- */}
    <div className='lg:flex flex-row min-[310px]:mx-[3rem] gap-5 justify-center lg:mt-6 mt-[-10rem] '>
      <ServiceBox title="Rubber O-Ring" description="Rubber O-Rings provide reliable sealing solutions, offering durability, flexibility, and resistance to pressure, temperature, and chemicals." pic={servicepic1}/>
      <ServiceBox title="Oil Seals" description="Oil seals prevent lubricant leakage and protect machinery by blocking contaminants, ensuring durability, efficiency, and smooth operation in applications." pic={servicepic2}/>
      <ServiceBox title="Rubber Coupling Bush" description="Rubber Coupling Bush absorbs shocks and vibrations, ensuring smooth power transmission, reducing wear, and enhancing machinery performance efficiently." pic={servicepic3}/>
      <ServiceBox title="Rubber Foundations" description="Rubber foundations provide strong vibration damping, stability, and durability, enhancing structural support and reducing wear in industrial applications." pic={servicepic4}/>         
    </div>
    {/* -----------------------------------------Box row 2---------------------------- */}
    <div className='lg:flex flex-row min-[310px]:mx-[3rem] gap-5 justify-center mt-[12rem] '>
      <ServiceBox title="Rubber & Plastic Caster" description="Rubber and plastic casters offer smooth mobility, durability, and floor protection, ensuring efficient movement in various industrial applications." pic={servicepic5}/>
      <ServiceBox title="Rubber Cords" description="Rubber cords provide flexibility, durability, and excellent sealing, making them ideal for industrial, automotive, and sealing applications." pic={servicepic6}/>
      <ServiceBox title="Rubber Diaphragm" description="Rubber diaphragms ensure precise control, flexibility, and durability, making them essential for sealing and regulating fluid or gas flow." pic={servicepic7}/>
      <ServiceBox title="Rubber Hydraulic Seals" description="Rubber hydraulic seals prevent fluid leakage, ensure high-pressure resistance, and enhance the efficiency and longevity of hydraulic systems." pic={servicepic8}/>         
    </div>
    {/* -----------------------------------------Box row 3---------------------------- */}
    <div className='lg:flex flex-row min-[310px]:mx-[3rem] gap-5 justify-center mt-[12rem] '>
      <ServiceBox title="Rubber Hydraulic Pipes" description="Rubber hydraulic pipes offer flexibility, high pressure resistance, and durability, ensuring reliable fluid transfer in demanding hydraulic systems." pic={servicepic9}/>
      <ServiceBox title="Rubber Silicon Parts" description="Rubber silicone parts provide excellent heat resistance, flexibility, and durability, making them ideal for high-performance industrial applications." pic={servicepic10}/>
      <ServiceBox title="Teflon Rods" description="Teflon rods offer exceptional chemical resistance, high-temperature stability, and low friction, making them ideal for industrial applications." pic={servicepic11}/>
      <ServiceBox title="Teflon Sheets" description="Teflon sheets provide excellent chemical resistance, high thermal stability, and non-stick properties, ideal for industrial applications" pic={servicepic12}/>         
    </div>
    {/* -----------------------------------------Box row 4---------------------------- */}
    <div className='lg:flex flex-row min-[310px]:mx-[3rem] gap-5 justify-center mt-[12rem] '>
      <ServiceBox title="Teflon Pipes" description="Teflon pipes offer superior chemical resistance, high-temperature tolerance, and low friction, making them ideal for corrosive environments." pic={servicepic13}/>
      <ServiceBox title="Teflon Coupling Bush" description="Teflon coupling bushes provide excellent chemical resistance, high durability, and reliable performance, ensuring smooth operation in industrial machinery." pic={servicepic14}/>
      <ServiceBox title="Fiber Rods" description="Fiber rods are lightweight, strong, and corrosion-resistant, making them ideal for applications requiring high strength and durability." pic={servicepic15}/>
      <ServiceBox title="Fiber Sheets" description="Fiber sheets offer high strength, lightweight properties, and resistance to wear, making them ideal for various industrial uses." pic={servicepic16}/>         
    </div>
    {/* -----------------------------------------Box row 5---------------------------- */}
    <div className='lg:flex flex-row min-[310px]:mx-[3rem] gap-5 justify-center mt-[12rem] '>
      <ServiceBox title="Fiber Rings" description="Fiber rings provide excellent strength, durability, and resistance to wear, making them suitable for sealing and industrial applications." pic={servicepic17}/>
      <ServiceBox title="Pneumatic Pipes" description="Pneumatic pipes are designed for efficient air pressure transfer, offering durability, flexibility, and resistance to wear in industrial systems." pic={servicepic18}/>
      <ServiceBox title="Mechanical Pump Seals" description="Mechanical pump seals ensure leak-free operation, preventing fluid loss and contamination, enhancing efficiency and longevity in pumping systems." pic={servicepic19}/>
      <ServiceBox title="Rubber Silicon Sheets" description="Rubber silicone sheets offer excellent heat resistance, flexibility, and durability, making them ideal for sealing and insulation applications." pic={servicepic20}/>         
    </div>
     {/* -----------------------------------------Box row 6---------------------------- */}
     <div className='lg:flex flex-row min-[310px]:mx-[3rem] gap-5 justify-center mt-[12rem] '>
      <ServiceBox title="Silicon Pipes" description="Silicon pipes provide high-temperature resistance, flexibility, and durability, making them ideal for fluid transfer in demanding environments." pic={servicepic21}/>
      <ServiceBox title="Silicon Boots" description="Silicon boots offer excellent flexibility, heat resistance, and durability, providing reliable protection and insulation in industrial applications." pic={servicepic22}/>
      <ServiceBox title="Filter Cloth (Numda)" description="Filter cloth (Numda) provides efficient filtration, excellent dirt retention, and durability, ensuring reliable performance in industrial filtration systems." pic={servicepic23}/>
      <ServiceBox title="Electrical Rubber Sheets" description="Electrical rubber sheets provide excellent insulation, high dielectric strength, and durability, ensuring safety and protection in electrical applications." pic={servicepic24}/>         
    </div>
  </div>
  )
}
