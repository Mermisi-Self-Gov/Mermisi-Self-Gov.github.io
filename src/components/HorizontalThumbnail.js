import { Col, Card } from 'react-bootstrap'

export default function HorizontalThumbnail({ article }) {
  return (
    <>
       <Col md={6}>
          <Card>
            <Card.Img variant="top" src={ article.thumbnail } />
            <Card.Body>
              <Card.Title>{ article.name }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> { article.authors.map(name => ` ${name}`) + `, ${article.date}` } </Card.Subtitle>
              <Card.Text>
                { article.text.split(" ").slice(0, 45).map(x => ` ${x}`) } ... 
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
    </>
  )
}

