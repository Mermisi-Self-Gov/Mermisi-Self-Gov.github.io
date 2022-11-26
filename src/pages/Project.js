import Container from 'react-bootstrap/Container'
import Col       from 'react-bootstrap/Col'
import Row       from 'react-bootstrap/Row'
import Card      from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Form      from 'react-bootstrap/Form'
import Dropdown  from 'react-bootstrap/Dropdown'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function NotFound() {
  return (<>
    <Container className="my-5">
      <p className="text-center">Sorry, the project you are looking for either does not exist or was deleted</p>
      <p className="text-center">Here's a picture of a cat instead</p>
      <img className="rounded mx-auto d-block" style={{maxWidth:`100%`, width:`400px`}} src="https://thiscatdoesnotexist.com" alt="cat"/>
    </Container>
  </>)
}

export default function Project({ mode, clickNum, data, setData, update, updateTags }) {
  const { id } = useParams()
  const [ project, setProject ] = useState(data[0][id])
  
  useEffect(() => {
    if (clickNum < 10) update()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setProject(data[0][id])
  }, [data, id])

  function handleChange(prop, value) {
    let arr = [...data[0]]
    arr[id][prop] = value
    setData([arr, data[1], data[2]])
    if (prop === "tags") 
      updateTags(data[0], setData)
  }
  
  let vis_opt = ["Hidden", "Unlisted", "Visible"]
  if (project === undefined) return (<><NotFound/></>)
  
  if (mode) return (
    <>
      <Container className="my-3">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Project title</Form.Label>
            <Col>
              <Form.Control type="" value={project.name} onChange={(e)=>handleChange("name", e.target.value)} placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Project thumbnail url</Form.Label>
            <Col>
              <Form.Control type="" value={project.thumbnail} onChange={(e)=>handleChange("thumbnail", e.target.value)} placeholder="" />
              <a href={project.thumbnail}>
                <img className="mt-2" src={project.thumbnail} alt="thumbnail preview" width="200px"/>
              </a>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Project thumbnail url (downscaled)</Form.Label>
            <Col>
              <Form.Control type="" value={project.thumbnaildownscaled} onChange={(e)=>handleChange("thumbnail", e.target.value)} placeholder="" />
              <a href={project.thumbnaildownscaled}>
                <img className="mt-2" src={project.thumbnaildownscaled} alt="thumbnail preview" width="200px"/>
              </a>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Authors</Form.Label>
            <Col>
              <Form.Control type="" value={project.authors} onChange={(e)=>handleChange("authors", e.target.value.split(','))} placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Publication date</Form.Label>
            <Col>
              <Form.Control type="" value={project.date} onChange={(e)=>handleChange("date", e.target.value)} placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Tags</Form.Label>
            <Col>
              <Form.Control type="" value={project.tags} onChange={(e)=>handleChange("tags", e.target.value.split(' ').join('').split(','))} placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Visibility</Form.Label>
            <Col>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  { vis_opt[project.visibility] }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={(e)=>handleChange("visibility", 0)}>Hidden</Dropdown.Item>
                  <Dropdown.Item onClick={(e)=>handleChange("visibility", 1)}>Unlisted</Dropdown.Item>
                  <Dropdown.Item onClick={(e)=>handleChange("visibility", 2)}>Visible</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm={2}>Project description</Form.Label>
            <Col>
              <Form.Control value={project.desc} as="textarea" rows={7} type="" onChange={(e)=>handleChange("desc", e.target.value)} placeholder="" />
            </Col>
          </Form.Group>

        </Form>
      </Container>
    </>
  ); else if (project.visibility) return (
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
                      project.links.map(link => <Card.Link href={link.href} key={link.href} target="_blank"> {link.title} </Card.Link>)
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
  ); else return (<>
    <NotFound/>
  </>)
}

