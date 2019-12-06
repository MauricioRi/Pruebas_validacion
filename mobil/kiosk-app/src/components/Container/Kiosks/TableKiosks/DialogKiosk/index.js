import React from 'react';
import { makeStyles ,DialogContent, DialogTitle } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import EditIcon from '@material-ui/icons/Edit';
import FormEditKiosk from './FormEditKiosk'

const useStyles = makeStyles(theme => ({
    subtitles: {
        fontWeight: "bold",
    },
    dialogTitle: {
		backgroundColor: theme.palette.primary.main,
		color: 'white'
    },
}));

    export default function DialogKiosk(props) {
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);
        const {row, change}=props;
        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };

    

    return (
        <div>
        <Button onClick={handleClickOpen}>
            <EditIcon/>
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth={'md'}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.dialogTitle}>
            usuario
            </DialogTitle>
            <DialogContent dividers>
                <FormEditKiosk classes={classes} handleClose={handleClose} data={row} change={change}/>
            </DialogContent>
        </Dialog>
        </div>
    );
}