import ArticleThumbnail from '../components/ArticleThumbnail.js'
import Container from 'react-bootstrap/Container'
import Row       from 'react-bootstrap/Row'
import React, { useEffect } from 'react'

export default function Newspaper({ data, update }) {
  
  useEffect(() => {
    update()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Container className="my-3">
        <Row className="g-3">
          { data.map(article => <ArticleThumbnail article={article} key={article.id}/>) }
        </Row>
      </Container>
    </>
  )
}

