import Container from 'react-bootstrap/Container'
import Col       from 'react-bootstrap/Col'
import Row       from 'react-bootstrap/Row'
import Card      from 'react-bootstrap/Card'
import Form      from 'react-bootstrap/Form'
import Dropdown  from 'react-bootstrap/Dropdown'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function NotFound() {
  return (<>
    <Container className="my-5">
      <p className="text-center">Sorry, the article you are looking for either does not exist or was deleted</p>
      <p className="text-center">Here's a picture of a cat instead</p>
      <img className="rounded mx-auto d-block" style={{maxWidth:`100%`, width:`400px`}} src="https://thiscatdoesnotexist.com" alt="cat"/>
    </Container>
  </>)
}

export default function Article({ mode, clickNum, data, setData, update }) {
  const { id } = useParams()
  const [ article, setArticle ] = useState(data[id])
  
  useEffect(() => {
    if (clickNum < 10) update()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setArticle(data[id])
  }, [data, id])

  function handleChange(prop, value) {
    let arr = [...data]
    arr[id][prop] = value
    setData(arr)
  }

  let vis_opt = ["Hidden", "Unlisted", "Visible"]
  
  if (article === undefined) return (<><NotFound/></>)

  if (mode) return (
    <>
      <Container className="my-3">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Article title</Form.Label>
            <Col>
              <Form.Control type="" value={article.name} onChange={(e)=>handleChange("name", e.target.value)} placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Article thumbnail url</Form.Label>
            <Col>
              <Form.Control type="" value={article.thumbnail} onChange={(e)=>handleChange("thumbnail", e.target.value)} placeholder="" />
              <a href={article.thumbnail}>
                <img className="mt-2" src={article.thumbnail} alt="thumbnail preview" width="200px"/>
              </a>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Card text</Form.Label>
            <Col>
              <Form.Control value={article.desc} as="textarea" rows={3} type="" onChange={(e)=>handleChange("desc", e.target.value)} placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Authors</Form.Label>
            <Col>
              <Form.Control type="" value={article.authors} onChange={(e)=>handleChange("authors", e.target.value.split(','))} placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Publication date</Form.Label>
            <Col>
              <Form.Control type="" value={article.date} onChange={(e)=>handleChange("date", e.target.value)} placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Visibility</Form.Label>
            <Col>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  { vis_opt[article.visibility] }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={(e)=>handleChange("visibility", 0)}>Hidden</Dropdown.Item>
                  <Dropdown.Item onClick={(e)=>handleChange("visibility", 1)}>Unlisted</Dropdown.Item>
                  <Dropdown.Item onClick={(e)=>handleChange("visibility", 2)}>Visible</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Control value={article.text} as="textarea" rows={20} type="" onChange={(e)=>handleChange("text", e.target.value)} placeholder="" />
          </Form.Group>
        </Form>
      </Container>
    </>
  ); else if (article.visibility > 0) return (
    <>
      <style>{`.article-text>img { max-width:100% } `}</style>
      { /* Thumbnail */}
      <Container className="my-3">
        <Card>
          <Card.Img variant="top" src={article.thumbnail} />
          <Card.Body className="text-dark">
            <Card.Title className="fs-1">
              { article.name }
            </Card.Title>
            <Card.Subtitle className="text-secondary">
              { article.authors.map(name => `${name}, `) }{ article.date }
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
  ); else return (<>
    <NotFound/>
  </>)
}

