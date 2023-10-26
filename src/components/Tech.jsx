import React from 'react';
import { technologies } from '../constants';
import BallCanvas from "./canvas/Ball.jsx";
import SectionWrapper from '../hoc/SectionWrapper'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technologie) => (
            <div className="w-28 h-28" key={technologie.name}>
                <BallCanvas icon={technologie.icon}/>
            </div>

        ))}

      
    </div>
  )
}

export default SectionWrapper(Tech, "")
