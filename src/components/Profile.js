import React from 'react'
import { Container } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import indexIco from '../assets/apple-command-light.png';

const EducationElement = ({title, subtitle, date, description}) => {
  return (
    <VerticalTimelineElement
    date={date}
    dateClassName='timeline-date'
    iconStyle={{ 
      background: 'rgb(0, 128, 0)', 
      color: '#fff', 
      alignContent: "center",
      textAlign: "center",
    }}
    contentStyle={{ 
      background: 'rgb(0, 128, 0)', 
      color: '#fff' 
    }}
    contentArrowStyle={{ borderRight: '8px solid  rgb(223, 255, 0)' }}
    icon={<i className="fas fa-graduation-cap timeline-icon"></i>}
    >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h6 className="vertical-timeline-element-subtitle">{subtitle}</h6>
    <hr/>
    <ul>
      {
        description.map((item, index) => {
          return (
            <li>
              {item}
            </li>
          )
        })
      }
    </ul>
  </VerticalTimelineElement>
  )
}

const WorkElement = ({title, subtitle, date, description}) => {
  return (
    <VerticalTimelineElement
    date={date}
    dateClassName='timeline-date'
    iconStyle={{ 
      background: 'rgb(112, 41, 99)', 
      color: '#fff', 
      alignContent: "center",
      textAlign: "center",
    }}
    contentStyle={{ 
      background: 'rgb(112, 41, 99)', 
      color: '#fff' 
    }}
    contentArrowStyle={{ borderRight: '8px solid  rgb(223, 255, 0)' }}
    icon={<i className="fas fa-briefcase timeline-icon"></i>}
    >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h6 className="vertical-timeline-element-subtitle">{subtitle}</h6>
    <hr/>
    {
      description.map((item, index) => {
        return (
          <p>
            {item}
          </p>
        )
      })
    }
  </VerticalTimelineElement>
  )
}

const Profile = () => {
  return (
    <>
        <Container>

          <Container>
            <h1 className='text-shadow'><img src={indexIco} className="index-logo"/> Profile </h1>
            <div className='page-short-summary'>
              <p> A computer nerd who loves delving to the intricacies of the low level computer systems. </p>
              <p> At the moment I'm focusing my study around 
                <span> Offensive Security </span> 
                and
                <span> Machine Learning </span>  
                in its application within 
                <span> Detection Engineering</span>
                . I mostly self-taught with the resources I can find on the internet and communities alike. 
              </p>
              <p> On the internet I'm also goes by:
                <ul>
                  <li>HyggeHalcyon</li>
                  <li>BuShiYue</li>
                </ul>
              </p>
            </div>
          </Container>

          <Container className='my-5'>
            <h2 align="center">Timeline</h2>
            <hr />
            <VerticalTimeline>
              <WorkElement 
                title="Security Bug Hunter"
                subtitle="Freelance"
                date="2023"
                description={[
                  "Filling my free time"
                ]}
              />
              <EducationElement 
                title="B.A. Computer Science"
                subtitle="Sepuluh Nopember Institute Of Technology"
                date="2022 - Present"
                description={[
                  "ITS-Nabu Project Asistant",
                  "Logics & Discrete Structure Lecture Assistant"
                ]}
              />
            </VerticalTimeline>
          </Container>
          
        </Container>
    </>
  )
}

export default Profile