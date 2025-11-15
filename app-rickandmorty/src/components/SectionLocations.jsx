import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ListMenu } from "./ListMenu";
import { CardResult } from "./Card/CardResult";

export default function Localidades() {
  const [Locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationCharacters, setLocationCharacters] = useState([]);

  // Cargar todos los locations al inicio
    useEffect(() => {
      fetch("https://rickandmortyapi.com/api/location")
        .then((res) => res.json())
        .then((data) => setLocations(data.results)); 
    }, []);

    // Cuando se selecciona un episodio
  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setLocationCharacters([]); // limpiar mientras tanto

    // location.characters es un arreglo de URLs de personajes
    const urls = location.residents;

    // Hacemos fetch de cada URL y luego guardamos todos los personajes
    const requests = urls.map((url) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(requests).then((characters) => {
      setLocationCharacters(characters);
    });
  };



  return (
    <Row className="mt-3">
          {/* Columna izquierda: lista de locations */}
          <Col md={4}>
            <ListMenu
              OptionsMenu={Locations}          // si tu ListMenu espera OptionsMenu
              onSelect={handleSelectLocation}
            />
          </Col>
    
          {/* Columna derecha: info del ubicación y personajes */}
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