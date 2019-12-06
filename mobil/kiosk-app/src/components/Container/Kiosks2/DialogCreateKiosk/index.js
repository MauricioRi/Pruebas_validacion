import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormCreateKiosk from './FormCreateKiosk';
import { makeStyles, DialogTitle, DialogContent } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    fab: {
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
        backgroundColor: green[600],
        },
    },
    dialogTitle: {
		backgroundColor: theme.palette.primary.main,
		color: 'white'
    },
    subtitles: {
        fontWeight: "bold",
    }
}));

    export default function DialogKiosk({change}) {
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);//use state 
        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };

    

        return (
            <div>
                <Fab aria-label="Add" className={classes.fab} color="primary" onClick={handleClickOpen}>
                    <AddIcon/>
                </Fab>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth={'md'}>
                    <DialogTitle id="form-dialog-title" onClose={handleClose} className={classes.dialogTitle}>
                        Crear insumo
                        
                    </DialogTitle>
                    <DialogContent dividers>
                        <FormCreateKiosk change={change} classes={classes} handleClose={handleClose}/>
                    </DialogContent>
                </Dialog>
            </div>
        );
}