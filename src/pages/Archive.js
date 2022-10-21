import { Container, Row } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

import Filter from '../components/Filter.js'
import GridThumbnail from '../components/GridThumbnail.js'


export default function Archive({data, update}) {

  const [ selected, setSelected ] = useState([])
  let hash = selected.reduce((acc, cur) => acc + 2**data[2][cur], 0)

  useEffect(() => {
    update()
  }, [])


  function handleTags(tag) {
    if (selected.includes(tag)) 
      setSelected(prevData => prevData.filter(element => element !== tag))
    else 
      setSelected(prevData => [tag, ...prevData])
  }

  return (
    <>
      <Container className="my-3">
        <Row className="g-3">
          <Filter all={data[1]} sel={selected} onChange={handleTags}/>
          { data[0].filter(proj => {return (proj.taghash & hash) == hash}).map(project => <GridThumbnail project={project} key={project.id}/>) }
        </Row>
      </Container>
    </>
  )
}

