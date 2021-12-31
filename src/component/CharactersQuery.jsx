import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { CardCustom } from "../ui/CardCustom";
import Pagination from "@mui/material/Pagination";


const useStyles = makeStyles((theme) => ({
    root: {
       
      

    },

    targeta: {
        margin: 8,

    }
}));

const CharactersQuery = () => {
    const classes = useStyles();
    const [page, setPage] = useState(3)
    const handleChange = (event, value) => {
        setPage(value);
    };
    const { loading, error, data } = useQuery(gql`
    {
      characters (page:${page}){
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

            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination count={10} page={page} onChange={handleChange} />

            </Stack>

        </div>
    );
};

export default CharactersQuery;
