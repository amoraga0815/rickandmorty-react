import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ListMenu } from "./ListMenu";
import { CardResult } from "./Card/CardResult";

export default function SectionEpisodes() {
  const [Episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [episodeCharacters, setEpisodeCharacters] = useState([]);

  // Cargar todos los episodios al inicio
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, []);

  // Cuando se selecciona un episodio
  const handleSelectEpisode = (episode) => {
    setSelectedEpisode(episode);
    setEpisodeCharacters([]); // limpiar mientras tanto

    // episode.characters es un arreglo de URLs de personajes
    const urls = episode.characters;

    // Hacemos fetch de cada URL y luego guardamos todos los personajes
    const requests = urls.map((url) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(requests).then((characters) => {
      setEpisodeCharacters(characters);
    });
  };

  return (
    <Row className="mt-3">
      {/* Columna izquierda: lista de episodios */}
      <Col md={4}>
        <ListMenu
          OptionsMenu={Episodes}          // si tu ListMenu espera OptionsMenu
          onSelect={handleSelectEpisode}
        />
      </Col>

      {/* Columna derecha: info del episodio y personajes */}
      <Col md={8}>
        {selectedEpisode && (
          <>
            <h3>
              {selectedEpisode.episode} - {selectedEpisode.name}
            </h3>
            <p>Fecha de emisión: {selectedEpisode.air_date}</p>

            <Row className="g-3">
              {episodeCharacters.map((char) => (
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

        {!selectedEpisode && (
          <p>Selecciona un episodio para ver sus personajes.</p>
        )}
      </Col>
    </Row>
  );
}