import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Drawer } from "@material-ui/core";
import ListSidebar from './ListSidebar';
import { menuOpen } from '../../actions'
import { useSelector, useDispatch } from 'react-redux'
import logo from "./vivall.jpg";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 200,
    },
    imageLogo: {
        margin: "auto",
        marginTop: 0,
        marginBottom: 0,
        width: '100%',
        height: '100%'
    }
}));

export default function CenteredGrid() {
    // función para abrir o cerrar  el sidebar
    const dispatch = useDispatch()

    const toggleDrawer = (openBar) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        dispatch(menuOpen(openBar))
    };

    const classes = useStyles();
    return (
        <Drawer open={useSelector(state => state.menu.open)} onClose={toggleDrawer(false)}>
            <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.backgroundGradient}>
                    <img alt="Logo YouPrint" src={logo} className={classes.imageLogo} />
                </Grid>
                <Grid item xs={12}>
                    <ListSidebar />
                </Grid>
            </Grid>
        </Drawer>
    );
}