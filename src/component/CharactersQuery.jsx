import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Button } from "@mui/material";


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
          console.log(data)
          return (
            <div key={character.id} >
              <p>{character.name}</p>
              <p>{character.id}</p>
              <p>especie: {character.species}+ {pag}</p>
              <img src={character.image} alt="img" />
              
            </div>
          );
        })}
      </div>
      <Button onClick={() =>setPag(pag + 1)}>next</Button>
      <Button onClick={() =>setPag(pag - 1)}>previous</Button>
      
    </div>
  );
};

export default CharactersQuery;
