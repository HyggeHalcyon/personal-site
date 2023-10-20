import React from 'react'
import { Container } from 'react-bootstrap';
import PhotoAlbum from 'react-photo-album';

import indexIco from '../assets/apple-command-light.png';
import gemastik from '../assets/gallery/gemastikxvi.json'
import unity from '../assets/gallery/unity.json'
import hcskopdar from '../assets/gallery/hcs-kopdar.json'
import compfest15 from '../assets/gallery/compfest15.json'

const Collection = ({title, basho, location, date, photos, layout, pad}) => {
  return (
    <>
      <div className='my-5 text-center'>
        <h3> {title} </h3>
        <p className='text-center'> {basho} | {location} | {date} </p>
        <PhotoAlbum 
          photos={photos}
          layout={layout ? layout : 'rows' }
        />
      </div>
    </>
  )
} 

const Gallery = () => {
  return (
    <>
      <Container>
        <Container>
          <h1><img src={indexIco} className="index-logo"/> Gallery </h1>
          <p>Such introvert promise himself to document and take more picture of his lyfe</p>
        </Container>

        <Container>
            <Collection 
              title={"Compfest 15 CTF"}
              basho={"University of Indonesia"}
              location={"Jakarta, Indonesia"}
              date={"2023"}
              photos={compfest15}
              layout={'columns'}
            />
          <Collection 
              title={"Heroes Cyber Security Kopdar"}
              basho={"Sepuluh Nopember Institute of Technology"}
              location={"Surabaya, Indonesia"}
              date={"2023"}
              photos={hcskopdar}
            />
            <Collection 
              title={"Gemastik XVI"}
              basho={"Brawijaya University"}
              location={"Malang, Indonesia"}
              date={"2023"}
              photos={gemastik}
            />
            <Collection 
              title={"Unity 2023 CTF"}
              basho={"Yogyakarta State University"}
              location={"Yogyakarta, Indonesia"}
              date={"2023"}
              photos={unity}
              layout={'columns'}
            />
        </Container>
      </Container>
    </>
  )
}

export default Gallery