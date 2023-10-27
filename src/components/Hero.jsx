import React from 'react';
import styles from '../styles';
import { ComputerCanva } from './canvas';
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
        <div className={`${styles.paddingX} absolute flex flex-row items-start gap-5 max-w-7xl mx-auto top-[120px] inset-0 ` }>
            <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-[#915eff]'>
                </div>
                <div className='w-1 sm:h-80 h-40 violet-gradient'>
                </div>
                
            </div>
            <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Merhan</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>I Develope 3D  Visuals, User <br className='sm:block hidden'/>Interfaces And Web Applications</p>
            </div>
        </div>

        <ComputerCanva />

        <div className='absolute flex justify-center items-center w-full bottom-4
        '>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
              className='w-3 h-3 rounded-full bg-secondary mb-1'
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                repeatType:'loop',
                repeat:Infinity,
                duration:1.5
              }}/>

            </div>
          </a>
        </div>
      
    </section>
  );
};

export default Hero
