import { Col, Card, Form } from 'react-bootstrap'

export default function Filter({ all, sel, onChange }) {
  
  function TagCheckbox({tag}) {
    return (
      <Form.Check 
        inline
        className="text-primary"
        type="checkbox"
        checked={ sel.includes(tag) }
        onChange={ () => { onChange(tag) } }
        id={`${tag}-checkbox`}
        label={`#${tag}`}
      />
    )
  }
  
  return (<>
    <Col md={6} lg={4} xl={3}>
      <Card>
        <Card.Header>Filter Projects by Tags</Card.Header>
        <Card.Body>
          <Form>
            <div className="">
            { all.map(tag => <TagCheckbox tag={tag} key={tag} />) }
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  </>)
}
