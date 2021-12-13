


import { makeStyles } from '@mui/styles';
import ButtonCustom from './ButtonCustom';
import { CardMedia, Grid, CardActions, CardContent, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    targeta: {
        display: 'flex',
        justifyContent: "center",
        border: "none",
        // margin: theme.spacing(1),
        // boxShadow: theme.shadows[0],
    },
    boxButton: {
        justifyContent: 'space-evenly',
    },
}));

export const CardCustom = ({ imageJPG, text,name,especies,key }) => {
    const classes = useStyles();
    return (

        <Grid  container className={classes.root} item xs={6} sm={5} md={4} lg={4} xl={4}>
            <Grid key ={key}>
                <CardMedia className={classes.targeta} component="img" image={imageJPG} height="300" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        name:{name}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        especies:{especies}
                    </Typography>
                </CardContent>
                <CardActions className={classes.boxButton}>
                    <ButtonCustom text={text} />
                </CardActions>
            </Grid>
        </Grid>
    )
}