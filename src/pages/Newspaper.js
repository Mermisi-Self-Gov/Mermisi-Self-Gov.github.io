import HorizontalThumbnail from '../components/HorizontalThumbnail.js'
import { Container, Row } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

export default function Newspaper({database, setDatabase}) {

  const [articles, setArticles] = useState(database[0])

  useEffect(() => {
    fetch(`${window.location.origin}${process.env.PUBLIC_URL}/articles.json`)
    .then(res => res.json())
    .then(
      (result) => {
        setDatabase(oldData => [result, oldData[1], oldData[2], oldData[3]])
        setArticles(oldData => result)
      }
    )
  }, [])

  return (
    <>
      <Container className="my-3">
        <Row className="g-3">
          { articles.map(article => <HorizontalThumbnail article={article} key={article.id}/>) }
        </Row>
      </Container>
    </>
  )
}

