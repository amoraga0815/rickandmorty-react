import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {CharacterMenu} from '../components/CharacterMenu.jsx';
import {CharacterCard} from '../components/Card/CharacterCard.jsx';


export default function Personajes() {
 const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <Container fluid className="p-4">
      <Row>

        {/* Zona roja */}
        <Col md={4}>
          <CharacterMenu
            characters={characters}
            onSelect={(char) => setSelectedCharacter(char)}
          />
        </Col>
                {/* Zona azul */}
        <Col md={4}>
          {selectedCharacter && (
            <CharacterCard
              image={selectedCharacter.image}
              name={selectedCharacter.name}
              species={selectedCharacter.species}
              buttonLabel={selectedCharacter.status}
              onButtonClick={() => alert(selectedCharacter.name)}
            />
          )}
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}
