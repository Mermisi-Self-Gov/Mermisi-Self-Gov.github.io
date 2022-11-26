import Container from 'react-bootstrap/Container' 
import Nav       from 'react-bootstrap/Nav' 
import Navbar    from 'react-bootstrap/Navbar' 
import Form      from 'react-bootstrap/Form' 
import Dropdown  from 'react-bootstrap/Dropdown' 

import { Link } from 'react-router-dom'
import UkraineBanner from './UkraineBanner'

// for more info about navbars in react-bootstrap visit:
// https://react-bootstrap.github.io/components/navbar/
//
export default function NavigationBar({ 
  userMode, setUserMode, 
  articles, setArticles, 
  projects, setProjects,
  resources, setResources,
  clickNum, setClickNum 
}) {
  
  function incrementClickNum() {
    if (window.location.pathname !== "/" && clickNum < 10)
      setClickNum(0);
    else if (clickNum < 10)
      setClickNum(clickNum + 1)
  }

  function addArticle() {
    let cDate = new Date()
    setArticles([
      ...articles, 
      {
        name:"Some article",
        authors:["John Doe"],
        thumbnail:"https://picsum.photos/1920/1080",
        text: "The quick brown fox jumps over the lazy dog\n\n<img width=\"400px\" src=\"https://thiscatdoesnotexist.com\" alt=\"cat\"/>\n\n<h1>MEW</h1>",
        desc: "The quick brown fox jumps over the lazy dog",
        date: `${cDate.getDate()}.${cDate.getMonth()}.${cDate.getFullYear()}`,
        visibility: 2,
      }
    ])
  }

  function addProject() {
    let cDate = new Date()
    setProjects([
      [
        ...projects[0], 
        {
          name:"Some project",
          authors:["John Doe"],
          thumbnail:"https://picsum.photos/1920/1080",
          thumbnaildownscaled:"https://picsum.photos/1920/1080",
          tags:["math"],
          date: `${cDate.getDate()}.${cDate.getMonth()}.${cDate.getYear()}`,
          desc: "The quick brown fox jumps over the lazy dog",
          links: [{title:"example.com", href:"https://example.com/"}],
          visibility: 2.
        }
      ],
      projects[1],
      projects[2]
    ])
  }

  function addResource() {
    setResources([
      ...resources,
      {
        name: "Some activity",
        url: "https://example.com",
        img: "https://picsum.photos/1920/1080",
        desc: "Lorem ipsum dolor sit amet",
        visibility: 2
      }
    ])
  }
  
  // source: https://stackoverflow.com/questions/57709550/how-to-download-text-from-javascript-variable-on-all-browsers
  function download(filename, text, type="text/plain") {
    // Create an invisible A element
    const a = document.createElement("a");
    a.style.display = "none";
    document.body.appendChild(a);

    // Set the HREF to a Blob representation of the data to be downloaded
    a.href = window.URL.createObjectURL(
      new Blob([text], { type })
    );

    // Use download attribute to set set desired file name
    a.setAttribute("download", filename);

    // Trigger the download by simulating click
    a.click();

    // Cleanup
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
  }

  function AdvancedOptions() {
    if (clickNum < 10) return
    return (<Nav>
      <Form className="nav-link">
        <Form.Check
          type="switch"
          checked={userMode}
          onChange={()=>{setUserMode(!userMode)}}
          label=""
        />
      </Form>
      <Dropdown className="me-2">
        <Dropdown.Toggle>New</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={addArticle}> Article </Dropdown.Item>
          <Dropdown.Item onClick={addProject}> Project </Dropdown.Item>
          <Dropdown.Item onClick={addResource}> Resource </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="">
        <Dropdown.Toggle>Download</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>{download("articles.json", JSON.stringify(articles))}}> articles.json </Dropdown.Item>
          <Dropdown.Item onClick={()=>{download("projects.json", JSON.stringify(projects))}}> projects.json </Dropdown.Item>
          <Dropdown.Item onClick={()=>{download("resources.json", JSON.stringify(resources[0]))}}> resources.json </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>)
  }
  
  return (<>
    <UkraineBanner/>
    <Navbar bg="light" expand="md" className="sticky-top">
      <Container>
        <Link style={{cursor:"pointer", textDecoration:"none"}} to="/"><Navbar.Brand onClick={incrementClickNum}>Mermisi Self-Gov </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/Newspaper" onClick={window.scrollTo(0,0)}>Newspaper</Link>
            <Link className="nav-link" to="/Archive"   onClick={window.scrollTo(0,0)}>Archive</Link>
            <Link className="nav-link" to="/Resources" onClick={window.scrollTo(0,0)}>Resources</Link>
          </Nav>
          <AdvancedOptions/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>)
}
