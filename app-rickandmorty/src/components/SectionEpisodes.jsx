import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ListMenu } from "./ListMenu";
import { CardResult } from "./Card/CardResult";

export default function SectionEpisodes() {
  const [Episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [episodeCharacters, setEpisodeCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, []);

  const handleSelectEpisode = (episode) => {
    setSelectedEpisode(episode);
    setEpisodeCharacters([]); 

    const urls = episode.characters;


    const requests = urls.map((url) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(requests).then((characters) => {
      setEpisodeCharacters(characters);
    });
  };

  return (
    <Row className="mt-3">
      <Col md={4}>
        <ListMenu
          OptionsMenu={Episodes}          
          onSelect={handleSelectEpisode}
        />
      </Col>

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