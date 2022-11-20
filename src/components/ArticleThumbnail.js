import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ArticleThumbnail({ article }) {
  return (
    <>
      <Col md={6}>
        <Link to={`/Newspaper/${article.id}`} style={{textDecoration:"none"}}>
          <Card>
            <Card.Img variant="top" src={ article.thumbnail } loading="lazy"/>
            <Card.Body>
              <Card.Title>{ article.name }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> { article.authors.map(name => ` ${name}`) + `, ${article.date}` } </Card.Subtitle>
              <Card.Text className="text-dark">
                { article.text.split(" ").slice(0, 45).map(x => ` ${x}`) } ... 
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  )
}

