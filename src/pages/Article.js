import Container from 'react-bootstrap/Container'
import Col       from 'react-bootstrap/Col'
import Row       from 'react-bootstrap/Row'
import Card      from 'react-bootstrap/Card'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Article({ mode, clickNum, data, update }) {
  const { id } = useParams()
  const [ article, setArticle ] = useState(data[id])
  
  useEffect(() => {
    if (clickNum < 10) update()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setArticle(data[id])
  }, [data, id])
  
  if (article == undefined) return

  return (
    <>
      <style>{`.article-text>img { width:100% } `}</style>
      { /* Thumbnail */}
      <Container className="my-3">
        <Card>
          <Card.Img variant="top" src={article.thumbnail} />
          <Card.Body className="text-dark">
            <Card.Title className="fs-1">
              { article.name }
            </Card.Title>
            <Card.Subtitle className="text-secondary">
              { article.authors.map(name => ` ${name}`) }, { article.date }
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            { /*
              <ListGroup.Item className="text-primary">{ article.tags.map(tag => `#${tag} `) }</ListGroup.Item>
            // */ }
          </Card.Footer>
        </Card>
      </Container>
      { /* Other stuff */ }
      <Container className="">
        <Row className="g-3">
          <Col md={12}>
            <Card>
              {/*
              <Card.Header className="fs-5"></Card.Header>
              */} 
              <Card.Body>
                { /*
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                */ }
                  <Container width="100%">
                    <Row>
                      <Col lg={10} className="offset-lg-1 py-lg-5">
                        <Card.Text
                          className="article-text"
                          style={{whiteSpace: "pre-line"}} 
                          dangerouslySetInnerHTML={{ __html: article.text }}
                        />
                      </Col>
                    </Row>
                  </Container>
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

