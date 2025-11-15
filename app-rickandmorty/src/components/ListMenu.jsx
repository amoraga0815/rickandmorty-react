
// src/components/organisms/ListMenu.jsx
import React from 'react';
import { ListGroup } from 'react-bootstrap';

export const ListMenu = ({ OptionsMenu, onSelect }) => {
  return (
    <ListGroup>
      {OptionsMenu.map((option) => (
        <ListGroup.Item
          key={option.id}
          action
          onClick={() => onSelect(option)}
        >
          {option.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
