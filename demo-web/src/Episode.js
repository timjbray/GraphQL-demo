import React from 'react';
import Card from 'react-bootstrap/Card';

export const Episode = ({ name, image, summary, season, number }) => (
  <Card style={{}}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>{`Season ${season}. Episode ${number}`}</Card.Subtitle>
      <Card.Text style={{ textOverflow: 'ellipses' }}>
        {summary ? summary.replace(/(<([^>]+)>)/gi, '') : ''}
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> .substr(0, 150) */}
    </Card.Body>
  </Card>
);
