import Col       from 'react-bootstrap/Col'
import Card      from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import { Link } from 'react-router-dom'

export default function GridThumbnail({ project, id }) {
  let vis_opt = ["[hidden]", "[unlisted]", ""]
  return (
    <>
      <Col md={6} lg={4} xl={3}>
        <Link to={`/Archive/${id}`} style={{textDecoration:"none"}}>
          <Card style={{opacity:`${100*(3+2*(project.visibility===2))/5}%`}}> 
            <Card.Img variant="top" src={ project.thumbnaildownscaled } alt={`${project.name} thumbnail`} loading="lazy"/>
            <Card.Body className="pb-2">
              <Card.Title className="">{ `${project.name} ${vis_opt[project.visibility]}` }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ project.authors.map(name => ` ${name}`) + `, ${project.date}`}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>
              <ListGroup.Item className="text-primary">{ project.tags.map(tag => `#${tag} `) }</ListGroup.Item>
            </Card.Footer>
          </Card>
        </Link>
      </Col>
    </>
  )
}


