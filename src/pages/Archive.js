import { Container, Row } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

import Filter from '../components/Filter.js'
import GridThumbnail from '../components/GridThumbnail.js'

export default function Archive({data, update}) {
  
  useEffect(() => {
    update()
  }, [])
  console.log(data)
  return (
    <>
      <Container className="my-3">
        <Row className="g-3">
          <Filter tagset={data[1]}/>
          { data[0].map(project => <GridThumbnail project={project} key={project.id}/>) }
        </Row>
      </Container>
    </>
  )
//*/
}

