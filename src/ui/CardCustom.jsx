
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@mui/material/CardActions';
import { Grid } from "@material-ui/core";
import { Card, CardMedia } from "@mui/material";
import ButtonCustom from './ButtonCustom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    targeta: {
        display: 'flex',
        justifyContent: "center",
        border: "0px",
        margin: theme.spacing(1),
        boxShadow: theme.shadows[0],
    },
    boxButton: {
        justifyContent: 'space-evenly',
    },
}));

export const CardCustom = ({ imageJPG, text }) => {

    const classes = useStyles();
    return (
        <Grid container className={classes.root} item xs={6} sm={5} md={4} lg={4} xl={4}>
            <Grid>
                <CardMedia component= "img" image={imageJPG} height="140"/>
                <CardActions className={classes.boxButton}>
                    <ButtonCustom text={text}/>
                </CardActions>
            </Grid>
        </Grid>
    )
}