import React from 'react';
import { Grid } from "@material-ui/core";
import CardList from "./CardList";
import { makeStyles } from '@material-ui/styles';
import { useSelector } from "react-redux";
import Kiosks from "./Kiosks";
import Kiosks2 from "./Kiosks2";
const useStyles = makeStyles(theme => ({
    root: {
        padding: 20,
    },
}));

const selectContent = (menuItem) => {
    switch (menuItem) {
        case 'kiosks':
            return <Kiosks />
        case 'products':
            return <Kiosks2/>
        default:
            return <CardList />
    }
}

//dependiendo del menuItem mostrar un contenido diferente
const Container = () => {
    const classes = useStyles();
    return <Grid container direction="row" alignItems={'center'} justify={'center'} className={classes.root}>
        {selectContent(useSelector(state => state.menu.option))}
    </Grid>
}



export default Container