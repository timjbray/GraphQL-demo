import React from 'react';
import Card from 'react-bootstrap/Card';
// import image from './avengers.jpg';

export const Movie = ({ name, image, summary, season, number }) => (
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

// export default Movie;
