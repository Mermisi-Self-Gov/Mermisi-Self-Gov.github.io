import ArticleThumbnail from '../components/ArticleThumbnail.js'
import Container from 'react-bootstrap/Container'
import Row       from 'react-bootstrap/Row'
import { useEffect } from 'react'

export default function Newspaper({ mode, clickNum, data, update }) {
  
  useEffect(() => {
    if (clickNum < 10) update()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Container className="my-3">
        <Row className="g-3">
          { data.map((article, index) => <ArticleThumbnail article={article} id={index} key={index}/>).reverse() }
        </Row>
      </Container>
    </>
  )
}

