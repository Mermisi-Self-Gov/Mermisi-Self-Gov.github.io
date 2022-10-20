import { Container, Row, Col, Card, CardGroup, Alert } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import ResourceThumbnail from '../components/ResourceThumbnail.js'

export default function Resources({ database, setDatabase }) {
  
  const [ activities, setActivities ] = useState(database[3])
  useEffect(() => {
    fetch(`${window.location.origin}${process.env.PUBLIC_URL}/activities.json`)
    .then(res => res.json())
    .then(
      (result) => {
        setDatabase(oldData => [oldData[0], oldData[1], oldData[2], result])
        setActivities(oldData => result)
      }
    )
  }, [])

  return (
    <>
      <Container className="my-3 g-3">
        <Row>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/1920/1080" />
              <Card.Body>
                <Card.Title>What is this page for?</Card.Title>
                <Card.Text>
                  This page aims to provide students with a number of (mostly) free educational resources. As you probably know, we unfortunately do not have that many clubs at school yet. We hope these resources will help you stay entertained and learn something new while we're adding more!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Hopefully you'll have as much fun as we did ;)</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/1920/1080" />
              <Card.Body>
                <Card.Title>Additional benefits</Card.Title>
                <Card.Text>
                  You might find these activities useful for your college application. You might also consider joining our team. We've left a few useful links if you are interested in applying abroad, though we expect you to do your own research on the matter.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Education is the key to freedom</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/1920/1080" />
              <Card.Body>
                <Card.Title>Want to join us?</Card.Title>
                <Card.Text>
                  If you are intrested in joining self-governance, the newspaper or any other of our projects you can fill out <a href="https://bit.ly/3CssquT">this form</a>. Note that even though there are a few drama-related questions, if you want to join school's drama club you should contact Grisho.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">We're always happy to see new faces!</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Row>
        <Row className="my-3">
          <Col>
            <Alert variant="" className="m-0 text-center h5"> List of Resources and Activities</Alert>
          </Col>
        </Row>
        <Row className="g-3">
          { database[3].map(activity => <ResourceThumbnail activity={activity} key={activity.id}/>) }
        </Row>
      </Container>
      
    </>
  )
}

