import Container from 'react-bootstrap/Container'
import Row       from 'react-bootstrap/Row'
import Col       from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Footer() {
  return (
    <footer>
      <Container className="my-3"> 
        <Row className="g-3">
          <Col md={6}>
            <ListGroup>
              <ListGroup.Item variant="secondary">Contact Us</ListGroup.Item>
              <ListGroup.Item>our.email@our.domain</ListGroup.Item>
              <ListGroup.Item>+995 123 456 789</ListGroup.Item>
              <ListGroup.Item><a href="https://instagram.com">Instagram</a>, <a href="https://facebook.com">Facebook</a>, <a href="https://mermisi.edu.ge">School website</a> </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}>
            <ListGroup>
              <ListGroup.Item variant="secondary">Our goals</ListGroup.Item>
              <ListGroup.Item>1. Step one</ListGroup.Item>
              <ListGroup.Item>2. Step two</ListGroup.Item>
              <ListGroup.Item>3. ??? </ListGroup.Item>
              <ListGroup.Item>4. Profit</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

