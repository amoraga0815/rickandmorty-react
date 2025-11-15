
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {ListMenu} from './components/ListMenu.jsx';
import {CardResult} from './components/Card/CardResult.jsx';

function Prueba() {
  
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
        {/* Zona azul */}
        <Col md={4}>
          {selectedCharacter && (
            <CardResult
              image={selectedCharacter.image}
              name={selectedCharacter.name}
              species={selectedCharacter.species}
              buttonLabel={selectedCharacter.status}
              onButtonClick={() => alert(selectedCharacter.name)}
            />
          )}
        </Col>

        {/* Zona roja */}
        <Col md={4}>
          <ListMenu
            characters={characters}
            onSelect={(char) => setSelectedCharacter(char)}
          />
        </Col>
      </Row>
    </Container>
  );

}

export default Prueba;