import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ListMenu } from "./ListMenu";
import { CardResult } from "./Card/CardResult";

export default function SectionCharacters() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <Row className="mt-3">
      <Col md={4}>
        <ListMenu
          OptionsMenu={characters}
          onSelect={(char) => setSelectedCharacter(char)}
        />
      </Col>

      <Col md={4}>
        {selectedCharacter && (
          <CardResult
            image={selectedCharacter.image}
            name={selectedCharacter.name}
            species={selectedCharacter.species}
            buttonLabel={"Ver Personaje"}
            onButtonClick={() => alert(selectedCharacter.name)}
          />
        )}
      </Col>

      <Col md={4}></Col>
    </Row>
  );
}