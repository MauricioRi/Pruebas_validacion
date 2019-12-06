import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { open, menuOpen, menuOption } from '../../../../../../actions'
import { useDispatch } from 'react-redux'
import { SERVER_BASE_URL } from "../../../../../../constants";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        paddingTop: '100%',
        borderRadius: 5,
        marginBottom: 3,
        '&:hover': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.20,
            },
            // '& $imageMarked': {
            //     opacity: 0,
            // },
            // '& $imageTitle': {
            //     border: '4px solid currentColor',
            // },
        },
    },
    imageTitle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        color: theme.palette.common.white,
        align: "center",
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    imageSrc: {
        borderRadius: 5,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        borderRadius: 5,
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.7,
        transition: theme.transitions.create('opacity'),
    },
}));

export default function SimpleList({ category }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const handleOnClick = () => {
        const { idCategory, idSubcategory } = category
        console.log(dispatch(open(idCategory, idSubcategory)));
        dispatch(menuOpen(false))
        dispatch(menuOption('products'))

    }
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} onClick={handleOnClick}>
            <ButtonBase
                focusRipple
                key={category.title}
                className={classes.root}
            >
                <span
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `url(${SERVER_BASE_URL}${category.image})`,
                    }}
                />
                <span className={classes.imageBackdrop} >

                </span>
                <Typography
                    display={'block'}
                    variant="overline"
                    className={classes.imageTitle}
                >
                    {category.title}
                </Typography>
            </ButtonBase>
        </Grid>
    );
}