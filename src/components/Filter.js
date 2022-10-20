import { Col, Card, Form, InputGroup } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

function TagCheckbox({tag}) {
  return (
    <Form.Check 
      inline
      className="text-primary"
      type="checkbox"
      id={`${tag}-checkbox`}
      label={`#${tag}`}
    />
  )
}

export default function Filter({tagset}) {
  const [selectedTags, setSelectedTags] = useState([]);
  return (<>
    <Col>
      <Card>
        <Card.Header>Filter Projects by Tags</Card.Header>
        <Card.Body>
          <Form>
            <div className="">
            { tagset.map(subj => <TagCheckbox tag={subj} />) }
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  </>)
}
