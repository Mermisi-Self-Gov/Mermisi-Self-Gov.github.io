import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Project({ data, update }) {
  const { id } = useParams()
  const [ project, setProject ] = useState({id:id, name:"", thumbnail:"", tags:[], files:[], links:[], authors:[], desc:""})
  
  useEffect(() => {
    update()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (data[0].length > 0) {
      setProject(data[0][id])
    }
  }, [data, id])
  
  return (
    <>
      { /* Thumbnail */}
      <Container className="my-3">
        <Card>
          <Card.Img variant="top" src={project.thumbnail} />
          <Card.Body className="text-dark">
            <Card.Title className="fs-1">
              { project.name }
            </Card.Title>
            <Card.Subtitle className="text-secondary">
              { project.authors.map(name => ` ${name}`) }, { project.date }
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <ListGroup.Item className="text-primary">{ project.tags.map(tag => `#${tag} `) }</ListGroup.Item>
          </Card.Footer>
        </Card>
      </Container>
      { /* Other stuff */ }
      <Container className="">
        <Row className="g-3">
          <Col md={4}>
                <Card>
                  <Card.Header className="fs-5">Project Links & Files</Card.Header>
                  <Card.Body>
                    { /*
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    */ }
                    { /*
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    */ }
                    {
                      project.links.map(link => <Card.Link href={link.href} key={link.href}> {link.title} </Card.Link>)
                    }
                  </Card.Body>
                </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Header className="fs-5">Project description</Card.Header>
              <Card.Body>
                { /*
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                */ }
                <Card.Text className="" style={{whiteSpace: "pre-line"}}>
                    { project.desc }
                </Card.Text>
                { /* 
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

