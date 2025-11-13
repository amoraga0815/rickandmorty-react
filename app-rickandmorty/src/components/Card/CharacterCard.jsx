
import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const CharacterCard = ({ image, name, species, buttonLabel, onButtonClick }) => {
  return (
    <Card style={{ width: '18rem' }} className="shadow-sm">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{species}</Card.Text>
        <Button variant="primary" onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      </Card.Body>
    </Card>
  );
};
