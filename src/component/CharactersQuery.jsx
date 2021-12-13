import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import ButtonCustom from "../ui/ButtonCustom";

const CharactersQuery = () => {
  const [pag,setPag] = useState(3)
  const { loading, error, data } = useQuery(gql`
    {
      characters (page:${pag}){
        results {
          id
          name
          image
          species
        }
      }
    }
  `);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <div >
        {data.characters.results.map((character) => {
          return (
            <div key={character.id} >
              <p>{character.name}</p>
              <p>{character.id}</p>
              <p>especie: {character.species}+ {pag}</p>
              <img src={character.image} alt="img" />
              <ButtonCustom text="Agregar"/>
              
            </div>
          );
        })}
      </div>
      <button onClick={() =>setPag(pag + 1)}>next</button>
      <button onClick={() =>setPag(pag - 1)}>previous</button>
     
      
    </div>
  );
};

export default CharactersQuery;
