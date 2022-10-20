import { Col, Card, ListGroup } from 'react-bootstrap'

export default function GridThumbnail({ project }) {
  return (
    <>
       <Col md={6} lg={4} xl={3}>
          <Card>
            <Card.Img variant="top" src={ project.thumbnail } />
            <Card.Body className="pb-2">
              <Card.Title>{ project.name }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ project.authors.map(name => ` ${name}`) + `, ${project.date}`}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>
              <ListGroup.Item className="text-primary">{ project.tags.map(tag => `#${tag} `) }</ListGroup.Item>
            </Card.Footer>
          </Card>
      </Col>
    </>
  )
}


