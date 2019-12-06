import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CategoryListSidebar from './CategoryListSidebar';
import { Popover } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { menuOption,menuOpen } from "../../../../actions";

const useStyles = makeStyles(theme => ({
    list: {
        width: '50vw',
        height: '80vh'
    },
    selected: {
        backgroundColor: "turquoise",
        color: "white",
    }
}));

export default function ItemSidebar({ option }) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch=useDispatch()

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
        if (option.option!=='products') {
            dispatch(menuOpen(false))
        }
        dispatch(menuOption(option.option))

    }

    function handleClose() {
        setAnchorEl(null);
    }
    

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const categoryList =
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            className={classes.list}
        >
            <div onClick={handleClose}>
                <CategoryListSidebar />
            </div>
        </Popover>;


    return (
        <div>
            <ListItem button onClick={handleClick} aria-haspopup="true">
                <ListItemIcon>
                    {option.icon}
                </ListItemIcon>
                <ListItemText primary={option.title} />
            </ListItem>
            {option.title === "Productos" ? categoryList : null}
        </div>
    );
}