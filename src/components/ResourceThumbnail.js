import { Col, Card, Button } from 'react-bootstrap'

export default function ResourceThumbnail({activity}) {
  return (<>
    <Col md={6} lg={4} xl={3}>
      <Card>
        <Card.Img variant="top" src={ activity.img } loading="lazy"/>
        <Card.Body>
          <Card.Title> { activity.name } </Card.Title>
          <Card.Text>
            { activity.desc }
          </Card.Text>
          <a href={ activity.url }><Button variant="primary"> Learn more! </Button></a>
        </Card.Body>
      </Card>
    </Col>
  </>)
}
