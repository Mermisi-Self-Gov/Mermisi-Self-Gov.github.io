import Container from 'react-bootstrap/Container'
import Row       from 'react-bootstrap/Row'
import Col       from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Footer() {

  // return (<></>)

  return (
    <footer>
      <Container className="my-3"> 
        <Row className="g-3">
          <Col md={6}>
            <ListGroup>
              <ListGroup.Item variant="secondary">კონტაქტი</ListGroup.Item>
              <ListGroup.Item>luka.rapava2004@gmail.com</ListGroup.Item>
              { /* <ListGroup.Item>+995 123 456 789</ListGroup.Item> */}
              <ListGroup.Item>
              	{/*<a href="https://instagram.com">Instagram</a>, <a href="https://facebook.com">Facebook</a>,*/ }<a href="https://mermisi.edu.ge">School website</a>, <a href="https://github.com/Mermisi-Self-Gov">GitHub</a> </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}>
            <ListGroup>
              <ListGroup.Item variant="secondary">საიტის მიზნები</ListGroup.Item>
              <ListGroup.Item>1. გაგაცნოთ სიახლეები</ListGroup.Item>
              <ListGroup.Item>2. შემოვინახოთ საინტერესო პრეზენტაციები</ListGroup.Item>
              <ListGroup.Item>3. გაგაცნოთ სასარებლო რესურსები </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

