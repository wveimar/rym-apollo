import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Button, Grid, Stack } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { CardCustom } from "../ui/CardCustom";

const useStyles = makeStyles((theme) => ({
    root: {
        
        
        
    },

    targeta:{
        margin: 8,

    }
}));

const CharactersQuery = () => {
    const classes = useStyles();
    const [pag, setPag] = useState(3)
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
        <div className={classes.root} >
            <Grid container   >
                {data.characters.results.map((character) => {
                    return (
                        <div key={character.id} className={classes.targeta}>
                            <CardCustom imageJPG={character.image} text="agregar" name={character.name} especies={character.species} />
                        </div>
                    );
                })}


            </Grid>
            <Button onClick={() => setPag(pag + 1)}>Next</Button>

            <Button onClick={() => setPag(pag - 1)}>Previous</Button>
        </div>
    );
};

export default CharactersQuery;
