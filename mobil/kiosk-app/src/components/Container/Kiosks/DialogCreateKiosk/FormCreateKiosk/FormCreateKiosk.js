import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, MenuItem, Button } from '@material-ui/core';
import { kioskCreate } from '../../../../../services/users';
export class FormCreateKiosk extends Component {
    constructor() {
        console.log('constructor');
        super();
        const Username = "";
        const Password = "";
        const Mail = "";
        const Rol = "";
        const Status=1;
        const formError = "";
        this.state = {
            Username,
            Password,
            Mail,
            Rol,
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
            const { Username, Password, Rol, Mail,Status } = this.state;
           
            const data = {
                Username,
                Password,
                Rol,
                Mail,
                Status
            };
            if (Username !== "" && Password !== "" && Rol !== "" && Mail !== "") {
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
        return (<Grid container spacing={2} justify="felx-start">
            <Grid item xs={6}>
                <div className={classes.subtitles}>Datos generales Usuario</div>
            </Grid>
            <Grid item xs={12}>
                <TextField required name='Username' label="Nombre de  usuario" value={this.state.Username} onChange={handleChange} margin="normal" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField required name='Password' label="Contraseña de usuario" value={this.state.Password} onChange={handleChange} margin="normal" fullWidth />
            </Grid>








            <Grid item xs={12}>
                <TextField name="Mail" required label="Correo " value={this.state.Mail} onChange={handleChange} margin="normal" fullWidth />

            </Grid>

            <Grid item xs={12}>
                <TextField name="Rol" select required label="Rol" value={this.state.Rol} onChange={handleChange} margin="normal" fullWidth>
                    <MenuItem value="Administrador">
                        Administrador
                        </MenuItem>
                    <MenuItem value="Barra">
                        Barra
                        </MenuItem>
                    <MenuItem value="Chef">
                        Chef
                        </MenuItem>
                    <MenuItem value="Subchef">
                        Subchef
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
