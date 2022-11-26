import Col  from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

export default function ArticleThumbnail({ article, id }) {
  let vis_opt = ["[hidden]", "[unlisted]", ""]
  return (
    <>
      <Col md={6}>
        <Link to={`/Newspaper/${id}`} style={{textDecoration:"none"}}>
          <Card style={{opacity:`${100*(3+2*(article.visibility===2))/5}%`}}>
            <Card.Img variant="top" src={ article.thumbnail } alt={`${article.name} thumbnail`} loading="lazy"/>
            <Card.Body>
              <Card.Title>{ `${article.name} ${vis_opt[article.visibility]}` }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> { article.authors.map(name => ` ${name}`) + `, ${article.date}` } </Card.Subtitle>
              <Card.Text className="text-dark">
                { article.desc.split(" ").slice(0, 45).map(x => ` ${x}`) } ... 
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  )
}

