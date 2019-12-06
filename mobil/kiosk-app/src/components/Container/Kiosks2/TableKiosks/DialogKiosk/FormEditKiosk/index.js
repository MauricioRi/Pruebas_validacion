import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, MenuItem, Button } from '@material-ui/core';
import { kioskUpdate } from './../../../../../../services/users'

class FormEditKiosk extends Component{
    constructor(props) {
		console.log('constructor');
		
		super(props)
		const { data: {Id_user, Username,Password, Rol, Mail} } = this.props
		this.state = {
            Id_user,
            Username, 
           Password, 
          Rol,
			Mail
		}		
	}

    render(){
        //const { handleClose, data: { Mail, nameClient, rfcClient, statusUser, streetClient, extNumberClient, suburbClient, zipcodeClient ,id} } = this.props
        const {handleClose, classes, change}=this.props;
        const handleChange = event => {
			const val = event.target.value
            this.setState({ [event.target.name]: val });
        }

        const handleSubmit = () => {
            //obtener valores actualizados
			const { Id_user,Username,Password, Rol, Mail } = this.state
           
			const data={
                Id_user: Id_user,
                Username:Username, 
                Password:Password, 
                Rol: Rol,
                Mail: Mail,
               
            }
            kioskUpdate(data).then(()=>{
				//handleOpenSuccessToast()//abrir toast
                handleClose()//cerrar modal
                change();
				//actualizar página
			}, (e) => console.error(e))
        };
        
        return(
            <Grid container spacing={2} justify="felx-start">
                <Grid item xs={6}>
                    <div className={classes.subtitles}>Datos Insumo</div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        name='Username'
                        label="Nombre de  usuario"
                        value={this.state.Username}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        name='Password'
                        label="Contraseña de usuario"
                        value={this.state.Password}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="Mail"
                        required
                        label="Correo "
                        value={this.state.Mail} 
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                       
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="Rol"
                        select
                        required
                        label="Rol"
                        value={this.state.Rol} 
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    >
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
            
            </Grid>
                
        );
    }
}

export default FormEditKiosk;