import Container from 'react-bootstrap/Container'
import Row       from 'react-bootstrap/Row'
import { useState, useEffect } from 'react'

import Filter from '../components/Filter.js'
import ProjectThumbnail from '../components/ProjectThumbnail.js'


export default function Archive({mode, clickNum, data, update}) {

  const [ selected, setSelected ] = useState([])
  let hash = selected.reduce((acc, cur) => acc + 2**data[2][cur], 0)

  useEffect(() => {
    if (clickNum < 10) update()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
          { 
            data[0]
              .map((project, index) => [project, index])
              .filter(([project, index]) => ((project.taghash & hash) === hash) && (project.visibility === 2 || mode))
              .map(([project, index]) => <ProjectThumbnail project={project} id={index} key={index}/>)
              .reverse()
          }
        </Row>
      </Container>
    </>
  )
}

