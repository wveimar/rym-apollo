import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Button, Grid} from "@mui/material";


import { CardCustom } from "../ui/CardCustom";

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
    
        {data.characters.results.map((character) => {
          return (
            <Grid  container  item xs={6} sm={5} md={4} lg={4} xl={6}>
             <CardCustom imageJPG={character.image} text="agregar" name={character.name} especies={character.species} key={character.id}/>
             </Grid>
             
          );
        })}
      <Button onClick={() =>setPag(pag + 1)}>Next</Button>
    
      <Button onClick={() =>setPag(pag - 1)}>Previous</Button>
    </div>
  );
};

export default CharactersQuery;
