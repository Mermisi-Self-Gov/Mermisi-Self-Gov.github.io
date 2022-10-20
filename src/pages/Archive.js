import { Container, Row } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

import Filter from '../components/Filter.js'
import GridThumbnail from '../components/GridThumbnail.js'

export default function Archive({database, setDatabase}) {
  
  const [projects, setProjects] = useState([database[1], database[2]])

  useEffect(() => {
    fetch(`${window.location.origin}${process.env.PUBLIC_URL}/projects.json`)
    .then(res => res.json())
    .then(
      (result) => {
        let tagset = [...new Set([].concat(...result.map(project => project.tags)))]
        setDatabase(oldData => [oldData[0], result, tagset, oldData[3]])
        setProjects(oldData => [result, oldData[1]])
      }
    )
  }, [])

  return (
    <>
      <Container className="my-3">
        <Row className="g-3">
          <Filter tagset={database[2]}/>
          { projects[0].map(project => <GridThumbnail project={project} key={project.id}/>) }
        </Row>
      </Container>
    </>
  )
//*/
}

