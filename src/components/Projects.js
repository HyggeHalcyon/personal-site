import React from 'react'
import { Row, Col, Container, Image, Badge } from 'react-bootstrap'
import {
  SiAnsible, SiAssemblyscript, SiC, SiCsharp, SiDocker, SiDotnet, SiExpress, 
  SiGo, SiJavascript, SiLaravel, SiMariadb, SiPhp, SiPostgresql, SiPython, SiReact, SiTypescript, 
  SiVmware, } from 'react-icons/si'
import { FaJava } from 'react-icons/fa';

import indexIco from '../assets/apple-command-light.png';
import comingsoon from '../assets/comingsoon.png';
import tedxits from '../assets/tedxits.png';
import sreits from '../assets/sreits.png';
import mabacup from '../assets/mabacup.png';
import underconstruction from '../assets/underconstruction.png';
import personalweb from '../assets/personalweb.png';

const Project = ({name, description, techStack, imageSrc}) => {
  return (
    <>
      <Row className='justify-content-md-center'>
        <Col className="justify-content-center d-flex flex-column">
          <h2> {name} </h2>
          {
            description.map((item, index) => {
              return (
                <p> {item} </p>
              )
            })
          }
          <div>
          {
            techStack.map((item, index) => {  
              return (
                <Badge pill 
                  className='mx-1' 
                  text={item.text ? item.text : 'white'} 
                  bg={item.bg ? item.bg : 'dark'
                }> 
                  {item.badge} {item.name} 
                </Badge>
              )
            })
          }
          </div>
        </Col>
        <Col className='my-4'>
          <Image
            className="mx-auto d-block"
            src={imageSrc} fluid rounded width="100%"
          />
        </Col>
      </Row>
    </>
  )
}

const TechStack = ({icon, title}) => {
  return (
      <li align="center" className="list-inline-item">
        {icon}
        <p align="center"> {title} </p>
      </li>
  )
}

const Projects = () => {
  return (
    <>
        <Container>

          <Container>
          <h1 className='text-shadow'><img src={indexIco} className="index-logo"/> Projects </h1>
          <p> I peaked a lot of interest and build stuff around them </p>
          </Container>

          <Container className='my-5'>
            <h2 align="center" > Technologies </h2>
            <hr className='spec-hr'/>
            <Row className='justify-content-md-center'>
                <Col md="auto">
                  <h5 align="center">Programming Languanges</h5>
                  <div className='techstack-logo text-center'>
                    <ul className="list-inline">
                      <TechStack icon={<SiPython/>} title="Python" />
                      <TechStack icon={<FaJava/>} title="Java" />
                      <TechStack icon={<SiC size={30}/>} title="C" />
                      <TechStack icon={<SiGo size={50}/>} title="Go" />
                      <TechStack icon={<SiTypescript/>} title="Typescript" />
                      <TechStack icon={<SiJavascript/>} title="Javascript" /> 
                      <TechStack icon={<SiAssemblyscript/>} title="[x64 x86]" />
                      <TechStack icon={<SiPhp size={50}/>} title="PHP" />
                    </ul>
                  </div>
                </Col>
            </Row>
            <Row>
                <Col> 
                  <h5 align="center">Databases</h5>
                  <div className='techstack-logo text-center'>
                    <ul className='list-inline'>
                      <TechStack icon={<SiPostgresql/>} title="Postgresql" />
                      <TechStack icon={<SiMariadb/>} title="MariaDB" />
                    </ul>
                  </div>
                </Col>
                <Col >
                  <h5 align="center">Cloud</h5>
                  <div className='techstack-logo text-center'>
                    <ul className='list-inline'>
                      <TechStack icon={<SiDocker/>} title="Docker" />
                      <TechStack icon={<SiVmware size={50}/>} title="VMWare" />
                      <TechStack icon={<SiAnsible/>} title="Ansible" />
                    </ul>
                  </div>
                </Col>
              </Row>
          </Container>

          <Container>
          <h2 align="center"> Things I made </h2>
            <hr className='spec-hr'/>
            <Project 
              name={"ITS-Nabu"}
              description={[
                "Indonesia's first cyber security training platform"
              ]}
              imageSrc={underconstruction}
              techStack={[
                {badge: <SiLaravel />, name: "Laravel", bg: "danger"},
                {badge: <SiMariadb />, name: "MariaDB", bg: "warning", text: "dark"}
              ]}
            />
            <Project 
              name={"Hexadiagonal Chess"}
              description={[
                <span>Highly Inspired by <a href="https://www.youtube.com/watch?v=bgR3yESAEVE" target="_blank" rel="noreferrer">CGP Grey</a></span>,
              ]}
              imageSrc={comingsoon}
              techStack={[
                {badge: <SiCsharp />, name: "C#", bg: "success"},
                {badge: <SiDotnet />, name: ".NET", bg: "success"}
              ]}
            />
            <Project 
              name={"Personal Web"}
              description={[
                "You're looking at it right now"
              ]}
              imageSrc={personalweb}
              techStack={[
                {badge: <SiReact />, name: "React", bg: "primary"},
              ]}
            />
            <Project 
              name={"SRE ITS 2023"}
              description={[
                "Contributed in the development of Backend API"
              ]}
              imageSrc={sreits}
              techStack={[
                {badge: <SiGo />, name: "Golang", bg: "info"},
                {badge: <SiPostgresql />, name: "Postgresql", bg: "primary"}
              ]}
            />
            <Project 
              name={"MABA CUP ITS 2023"}
              description={[
                "Lead the development of Backend API"
              ]}
              imageSrc={mabacup}
              techStack={[
                {badge: <SiExpress />, name: "Express", bg: "warning", text: "dark"},
                {badge: <SiPostgresql />, name: "Postgresql", bg: "primary"}
              ]}
            />
            <Project 
              name={"TEDxITS 2023"}
              description={[
                "Contributed in the development of Backend API"
              ]}
              imageSrc={tedxits}
              techStack={[
                {badge: <SiExpress />, name: "Express", bg: "warning", text: "dark"},
                {badge: <SiPostgresql />, name: "Postgresql", bg: "primary"}
              ]}
            />
          </Container>
          
        </Container>
    </>
  )
}

export default Projects