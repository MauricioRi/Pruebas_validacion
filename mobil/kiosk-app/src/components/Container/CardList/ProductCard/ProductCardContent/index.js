import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';


const ProductCardContent = ({ content }) => {
    const useStyles = makeStyles({
        root: {
            height: "100%",
        },
        circle: {
            borderRadius: '50%',
            width: "25%",
            backgroundColor: () => content.enable ? 'green' : 'red',
            paddingTop: '25%',
        },
    });

    const classes = useStyles();
    return <Grid container direction='row' className={classes.root}>
        <Grid container item xs={8} direction='column' alignItems="flex-start">
            <Grid item>
                <Typography display={"inline"}>
                    Producto:
                </Typography>
                <Typography  display={"inline"} variant={"inherit"} noWrap>
                    {` ${content.title}`}
                </Typography>
            </Grid>
            <Grid item>
                <Typography display={"inline"}>
                Precio: 
                </Typography>
                <Typography color={"secondary"} display={"inline"} variant='h5'> 
                    {` $${content.price}`}
                </Typography>
            </Grid>
        </Grid>
        <Grid container item xs={4}
            direction="column"
            justify="center"
            alignItems="flex-end" >
            <div className={classes.circle} ></div>
        </Grid>
    </Grid>
}

export default ProductCardContent