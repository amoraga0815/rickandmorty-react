import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ListMenu } from "./ListMenu";
import { CardResult } from "./Card/CardResult";

export default function Localidades() {
  const [Locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationCharacters, setLocationCharacters] = useState([]);

    useEffect(() => {
      fetch("https://rickandmortyapi.com/api/location")
        .then((res) => res.json())
        .then((data) => setLocations(data.results)); 
    }, []);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setLocationCharacters([]); 

    const urls = location.residents;

    const requests = urls.map((url) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(requests).then((characters) => {
      setLocationCharacters(characters);
    });
  };



  return (
    <Row className="mt-3">
          <Col md={4}>
            <ListMenu
              OptionsMenu={Locations}          
              onSelect={handleSelectLocation}
            />
          </Col>
    
          <Col md={8}>
            {selectedLocation && (
              <>
                <h3>
                  {selectedLocation.type} - {selectedLocation.name}
                </h3>
    
                <Row className="g-3">
                  {locationCharacters.map((char) => (
                    <Col key={char.id} md={4}>
                      <CardResult
                        image={char.image}
                        name={char.name}
                        species={char.species}
                        buttonLabel={"Ver Personaje"}
                        onButtonClick={() => alert(char.name)}
                      />
                    </Col>
                  ))}
                </Row>
              </>
            )}
    
            {!selectedLocation && (
              <p>Selecciona un Ubicacion para ver sus personajes.</p>
            )}
          </Col>
        </Row>
  );
}