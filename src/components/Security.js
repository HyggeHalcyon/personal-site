import React from 'react'
import { Container, Row, Col, ListGroup, Image, Badge } from 'react-bootstrap';

import indexIco from '../assets/apple-command-light.png';
import HCS  from '../assets/HCS.png';
import TCP1P from '../assets/TCP1P.png';

const Certification = ({certUrl, imgUrl, title}) => {
  return (
    <Col xs="3" md="3" sm="3" align="center">
      <a href={certUrl} target="_blank" rel="noreferrer">
        <Image
          className="mx-auto d-block"
          src={imgUrl} fluid width="80%"
        />
        <p align="center"> {title} </p>
      </a>
    </Col>
  )
}

const CtfTeam = ({logo, name, link}) => {
  return (
    <li className='ctf-team'><a href={link} target="_blank" rel="noreferrer">
    <Badge pill text='white' bg='dark' className='pr-3 pl-2 pt-1 pb-1'>
      <img src={logo} className="index-logo"/>  
      <span> {name} </span>
    </Badge>
  </a></li>
  )
}

const Security = () => {
  return (
    <>
      <Container>

        <Container>
            <h1 className='text-shadow'><img src={indexIco} className="index-logo"/> Security </h1>
            <div className='page-short-summary'>
              <p> My main passion lies in Information Security. </p>
              <p> In my free time, I participate in CTFs focusing in 
                <span> Exploit Development </span> 
                and 
                <span> Reverse Engineering</span>. 
              </p>
              <p> Once in a while I also try Bug Hunting and get lucky. </p>
              <p> currently playing for: 
                <ul>
                  <CtfTeam logo={HCS} name={"Heroes Cyber Security"} link={"https://ctftime.org/team/70159"}/>
                  <CtfTeam logo={TCP1P} name={"TCP1P"} link={"https://ctftime.org/team/187248"}/>
                </ul>
              </p>
            </div>
          </Container>

          <Container className='my-4'>
            <h2 align="center">CTFs Competition</h2>
            <h6 className='text-center'><a a href="https://github.com/HyggeHalcyon/CTFs-Writeups" target="_blank" rel="noreferrer"> Full list </a></h6>
            <hr />
              <Row className='my-5'>
                <Col> 
                  <h3 align="center">International</h3>
                  <ListGroup a="ul" className='ml-5'>
                    <li> ??? — 🇻🇳 ASCIS CTF 2023 (Final) </li>
                    <li> 🥇1st — 🇻🇳 ASCIS CTF 2023 (Quals) </li>
                    <li> 🥇1st — 🇺🇸 Pointer Overflow CTF 2023</li>
                    <li> 🥇1st — 🇧🇩 BDSec CTF 2023</li>
                  </ListGroup>
                </Col>
                <Col>
                  <h3 align="center">Challenge Author</h3>
                  <ListGroup a="ul" className='ml-5'>
                    <li> HCS Internal Selection CTF 2023</li>
                    <li> TCP1P CTF 2023: First Step Beyond Nusantara</li>
                  </ListGroup>
                </Col>
              </Row>
              <Row className='justify-content-md-center'>
                <Col md="auto">
                  <h3 align="center">Indonesian</h3>
                  <ListGroup a="ul">
                    <li> ??? — Hology6.0 CTF (Final)</li>
                    <li> 🥇1st — Hology6.0 CTF (Quals)</li>
                    <li> ??? — Slashroot 7.0 CTF (Final)</li>
                    <li> 4th — Slashroot 7.0 CTF (Quals)</li>
                    <li> 12th — Compfest 15 CTF (Final)</li>
                    <li> 9th — Compfest 15 CTF (Quals)</li>
                    <li> 5th — HackToday CTF 2023 (Quals)</li>
                    <li> 9th — Gemastik XVI Cyber Security (Final)</li>
                    <li> 5th — Gemastik XVI Cyber Security (Quals)</li>
                  </ListGroup>
                </Col>
              </Row>
          </Container>

          <Container className='my-5'>
            <h2 align="center" className='text-shadow'>CVEs</h2>
            <hr />
            <Row className='justify-content-md-center'>
            <ListGroup a="ul">
              <li> CVE-2023-44146: CSRF in Checkfront Online Booking System</li>
              <li> CVE-2023-41131: CSRF in Sp*tify Play Button for WordPress </li>
              <li> CVE-2023-41129: CSRF in Patreon WordPress </li>
            </ListGroup>
            </Row>
          </Container>

          <Container className='my-5'>
            <h2 align="center" className='text-shadow'>Certification</h2>
            <hr />
            <Row className='justify-content-md-center'>
              <Certification 
                certUrl={"https://www.credly.com/badges/c875cc87-c43b-4964-9156-8d37fa5f05ff/public_url"}
                imgUrl={"https://images.credly.com/size/680x680/images/fc1352af-87fa-4947-ba54-398a0e63322e/security-compliance-and-identity-fundamentals-600x600.png"}
                title={"Microsoft Security, Compliance, and Identity Fundamentals"}
              />
            </Row>
          </Container>

      </Container>
    </>
  )
}

export default Security