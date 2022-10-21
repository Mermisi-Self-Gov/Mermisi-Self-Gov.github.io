import HorizontalThumbnail from '../components/HorizontalThumbnail.js'
import { Container, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'

export default function Newspaper({ data, update }) {
  
  useEffect(() => {
    update()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Container className="my-3">
        <Row className="g-3">
          { data.map(article => <HorizontalThumbnail article={article} key={article.id}/>) }
        </Row>
      </Container>
    </>
  )
}

