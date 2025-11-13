
// src/components/organisms/CharacterMenu.jsx
import React from 'react';
import { ListGroup } from 'react-bootstrap';

export const CharacterMenu = ({ characters, onSelect }) => {
  return (
    <ListGroup>
      {characters.map((char) => (
        <ListGroup.Item
          key={char.id}
          action
          onClick={() => onSelect(char)}
        >
          {char.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
