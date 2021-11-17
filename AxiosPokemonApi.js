import React, { useState, useEffect } from "react";
import axios from 'axios';
export const AxiosPokemonApi = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=1&limit=807")
      .then(response=> {setPokemon(response.data.results)})
  }, []);

  const [listPokemon, setListPokemon] = useState([]);
  const onSubmitHandler = () => (
    <div>
      {pokemon.length > 0 &&
        pokemon.map((elem, index) => (
          <div key={index}>
            {index + 1} {elem.name}
          </div>
        ))}
    </div>
  );

  return (
    <div>
      <button type="onclick" onClick={() => setListPokemon(onSubmitHandler)}>
        Fecth Pokemon
      </button>
      {listPokemon}
    </div>
  );
};
