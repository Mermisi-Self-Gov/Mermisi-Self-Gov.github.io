import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap' 
import UkraineBanner from './UkraineBanner'

// for more info about navbars in react-bootstrap visit:
// https://react-bootstrap.github.io/components/navbar/
//
export default function NavigationBar() {
  return (<>
    <UkraineBanner/>
    <Navbar bg="light" expand="md" className="sticky-top">
      <Container>
        <Navbar.Brand href="/">Mermisi Self-Gov </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/Newspaper" onClick={window.scrollTo(0,0)}>Newspaper</Link>
            <Link className="nav-link" to="/Archive"   onClick={window.scrollTo(0,0)}>Archive</Link>
            <Link className="nav-link" to="/Resources" onClick={window.scrollTo(0,0)}>Resources</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>)
}
