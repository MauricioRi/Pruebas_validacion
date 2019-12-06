import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, MenuItem, Button } from '@material-ui/core';
import { InsumoCreate } from '../../../../../services/insumos';
export class FormCreateKiosk extends Component {
    constructor() {
        console.log('constructor');
        super();
        const Name = "";
        const Quantity = "";
        const Unitary_quantity = "";
        const Status = 1;
        const Area_insumo = "";
        const Id_unit = "";
        const Stock_max = "";
        const Stock_min = "";
        const Stock_alert = "";
        const Cost = "";
        const formError = "";

        this.state = {
            Name,
            Quantity,
            Unitary_quantity,
            Area_insumo,
            Id_unit,
            Stock_max,
            Stock_min,
            Stock_alert,
            Cost,
            formError
        };
    }
    render() {
        const { handleClose, classes, change } = this.props;
        const handleChange = event => {
            const val = event.target.value;
            this.setState({ [event.target.name]: val });
        };
        const handleSubmit = () => {
            //obtener valores actualizados
            const { Name, Quantity, Unitary_quantity, Area_insumo, Id_unit, Stock_max, Stock_min, Stock_alert, Cost } = this.state;

            const data = {
                Name,
                Quantity,
                Unitary_quantity,
                Status,
                Area_insumo,
                Id_unit,
                Stock_max,
                Stock_min,
                Stock_alert,
                Cost
            };
            if (Name !== "" &&
                Quantity !== "" &&
                Area_insumo !== "" &&
                Id_unit !== "" &&
                Stock_max !== "" &&
                Stock_min !== "" &&
                Stock_alert !== "" &&
                Cost !== "") {
                kioskCreate(data).then(() => {
                    change();
                }, (e) => console.error(e));
                handleClose();
            }
            else {
                this.setState({ formError: "Complete todos los campos *" });
            }
            console.log(data);
        };
        return (
            <Grid container spacing={2} justify="felx-start">
                <Grid item xs={6}>
                    <div className={classes.subtitles}>Insumos </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField required name='Name' label="Nombre deinsumo" value={this.state.Name} onChange={handleChange} margin="normal" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField required name='Quantity' label="cantidad " value={this.state.Quantity} onChange={handleChange} margin="normal" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField name="Id_unit" select required label="unidad " value={this.state.Id_unit} onChange={handleChange} margin="normal" fullWidth>
                        <MenuItem value="1">
                            kilogramo
                        </MenuItem>
                        <MenuItem value="2">
                            litro
                        </MenuItem>
                        <MenuItem value="3">
                            onza
                        </MenuItem>
                        <MenuItem value="4">
                            cucharada
                        </MenuItem>

                    </TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField name="Unitary_quantity" required label="cantidad unitaria  " value={this.state.Unitary_quantity} onChange={handleChange} margin="normal" fullWidth />

                </Grid>

                <Grid item xs={12}>
                    <TextField name="Area_insumo" select required label="Area_insumo" value={this.state.Area_insumo} onChange={handleChange} margin="normal" fullWidth>
                        <MenuItem value="Cosina">
                            cosina
                        </MenuItem>
                        <MenuItem value="Barra">
                            Barra
                        </MenuItem>

                    </TextField>
                </Grid>



                <Grid item xs={6} justify="flex-end">
                    <div>{this.state.formError}</div>
                </Grid>
                <Grid item xs={3} justify="flex-end">
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                </Grid>
                <Grid item xs={3} justify="flex-end">
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        Guardar
                    </Button>
                </Grid>

            </Grid>);
    }
}
