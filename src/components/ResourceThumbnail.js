import Col    from 'react-bootstrap/Col'
import Card   from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
          <a href={ activity.url } target="_blank"><Button variant="primary"> Learn more! </Button></a>
        </Card.Body>
      </Card>
    </Col>
  </>)
}
