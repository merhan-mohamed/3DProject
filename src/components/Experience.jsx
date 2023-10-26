import React from 'react'
import { textVariant } from '../utils/motion'
import {  experiences } from '../constants';
import {motion} from "framer-motion";
import styles from '../styles';
import "react-vertical-timeline-component/style.min.css";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component" ;
import SectionWrapper from "../hoc/SectionWrapper"


const ExperienceCard = ({title, company_name, points, date, iconBg, icon}) => (
    <VerticalTimelineElement
    contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
        <img src={icon} alt="" 
          className='w-[60%] h-[60%] object-contain'
          />
        
        </div>

      }
      >
        <div>
            <h3 className='text-white text-[24px] font-bold'>{title}</h3>
            <p  className='text-secondary text-[16px] font-semibold'>{company_name}</p>
        </div>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
        {points.map((point, index) => (
            
            <li key={`point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'>
                {point}
            </li>

        ))}
        </ul>

    </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
    </motion.div>

    <div className='flex flex-col mt-20'>
        <VerticalTimeline>
            {experiences.map((experience, index) => (
                <ExperienceCard key={experience.title} {...experience}
                />
            ))}
            
        </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")
