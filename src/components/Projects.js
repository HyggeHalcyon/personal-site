import React from 'react'
import { Container } from 'react-bootstrap'

import indexIco from '../assets/apple-command-light.png';

const Projects = () => {
  return (
    <>
        <Container>
          <h1><img src={indexIco} className="index-logo"/> Projects </h1>
        </Container>
    </>
  )
}

export default Projects