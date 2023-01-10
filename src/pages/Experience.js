import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';
import { IoSchoolOutline } from 'react-icons/io5';






function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2010 - 2020'
          iconStyle={{background :"#3e497a", color: "#fff" }}
          icon = {<FaSchool />}
        >
          <h3 className='vertical-timeline-element-title'> 
            Indian School Dar es Salaam, Dar es Salaam, Tanzania
          </h3>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2020 - ongoing'
          iconStyle={{background :"#3e497a", color: "#fff" }}
          icon = {<IoIosSchool />}
        >
          <h3 className='vertical-timeline-element-title'> 
            McMcaster Univeristy, Hamilton, Ontario
          </h3>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2022 Sept - 2022 Dec'
          iconStyle={{background :"#e9d35b", color: "#3e497a" }}
          icon = {<IoSchoolOutline/>}
        >
          <h3 className='vertical-timeline-element-title'> 
            Open Education Research Assistant 
          </h3>
          <p></p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience