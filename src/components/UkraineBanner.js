import Container from 'react-bootstrap/Container' 
import Col       from 'react-bootstrap/Col' 
import Row       from 'react-bootstrap/Row' 
import Alert     from 'react-bootstrap/Alert' 

export default function UkraineBanner() {
  return (<>
    <Container fluid className="">
      <Row className="p-0">
        <Col className="g-0">
          <Alert variant="info" className="p-2 m-0 banner-alert" style={{borderRadius: "0px"}}>
            <p className="text-end m-0 fw-bold">Glory to Ukraine!</p>
          </Alert>
        </Col>
        <Col className="g-0">
          <Alert variant="warning" className="p-2 m-0 banner-alert" style={{borderRadius: "0px"}}>
            <p className="m-0 fw-bold">Glory to Heroes!</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  </>)
}

