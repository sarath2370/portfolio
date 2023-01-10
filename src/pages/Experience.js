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
          <p>Courses: Operating Systems, Algorithms and Complexity, Linear Optimization</p>
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
          <p>Department of Computing and Software - McMaster University</p>
          <p>Supported the development of the content of a First year Course Textbook used by over 120 students each academic year (Course: 1XD3 Design Thinking).</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2023 Jan - ongoing'
          iconStyle={{background :"#e9d35b", color: "#3e497a" }}
          icon = {<IoSchoolOutline/>}
        >
          <h3 className='vertical-timeline-element-title'> 
            Teaching Assistant 
          </h3>
          <p>Department of Computing and Software - McMaster University</p>
          <p>
            Mentoring Student Teams of 4 in Design Thinking projects that tasks them to survey and interview potential target audiences and build web applications on ELM to solve a consumer problem
          </p>
          <p>
            Performed Team-lead like duties, with regular follow-ups on Group members, progress reports on the project and Troubleshooting sessions to reach feasible solutions
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
