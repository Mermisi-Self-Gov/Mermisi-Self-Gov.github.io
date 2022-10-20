import HorizontalThumbnail from '../components/HorizontalThumbnail.js'
import { Container, Row } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

export default function Newspaper({ data, update }) {
  
  useEffect(() => {
    update()
  }, [])

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

