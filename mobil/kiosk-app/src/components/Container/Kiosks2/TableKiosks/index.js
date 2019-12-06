import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {columns} from './../../../../services/users';
import DialogKiosk from './DialogKiosk'
import { Grid } from '@material-ui/core';

import LocalDiningIcon from '@material-ui/icons/LocalDining';
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    tableWrapper: {
        maxHeight: 440,
        overflow: 'auto',
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    subtitles: {
        fontWeight: "bold",
    }
});

export default function TableKiosks({rows, change}) {
    console.log(rows);
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

return (
    <Grid container>
        <Grid item xs={12}>
            <div className={classes.title}><LocalDiningIcon className={classes.title}/>INSUMOS</div>
            <br/>

        </Grid>
        <Grid item xs={12}>
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                        {columns.map(column => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                           
                           
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                <TableCell align={row.align}>{row.Username}</TableCell>
                                <TableCell align="right">{row.Password}</TableCell>
                                <TableCell align="right">{row.Rol}</TableCell>
                                <TableCell align="right">{row.Mail}</TableCell>
                                
                              
                                <TableCell align="right">
                                <DialogKiosk row={row} change={change}/>


                                    
                                </TableCell>
                            {/*columns.map(column => {
                                const value = row[column.id];
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                </TableCell>
                                );
                            })*/}
                            </TableRow>
                        );
                        })}
                    </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[8, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                    'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                    'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                </Paper>
        </Grid>
    </Grid>
    
);
}