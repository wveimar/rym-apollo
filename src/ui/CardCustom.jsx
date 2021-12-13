import { makeStyles } from '@mui/styles';
import ButtonCustom from './ButtonCustom';
import { CardMedia, Card, CardActions, CardContent, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    boxButton: {
        justifyContent: 'space-evenly',
    },
}));

export const CardCustom = ({ imageJPG, text,name,especies }) => {
    const classes = useStyles();
    return (
            <Card sx={{ maxWidth: 345 }} >
                <CardMedia  component="img" image={imageJPG} height="300" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        name:{name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        especies:{especies}
                    </Typography>
                </CardContent>
                <CardActions className={classes.boxButton}>
                    <ButtonCustom text={text} />
                </CardActions>
            </Card>
        
    )
}