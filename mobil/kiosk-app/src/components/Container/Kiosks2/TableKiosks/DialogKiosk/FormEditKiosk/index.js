import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, MenuItem, Button } from '@material-ui/core';
import { InsumoUpdate } from './../../../../../../services/insumos'

class FormEditKiosk extends Component{
    constructor(props) {
		console.log('constructor');
		
		super(props)
		const{ data : {  
            Id_insumo,
            Name,Quantity,
            Unitary_quantity,
            Status,
            Area_insumo,
            Id_unit,
            Stock_max,
            Stock_min,
            Stock_alert,
            Cost
        }} = this.props
		this.state = {
            Id_insumo,
            Name,
            Quantity,
            Unitary_quantity,
            Area_insumo,
            Id_unit,
            Stock_max,
            Stock_min,
            Stock_alert,
            Status,
            Cost
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
			const {Id_insumo, Name, Quantity,Unitary_quantity,Area_insumo, Id_unit,Stock_max,Stock_min,Stock_alert,Cost ,Status} = this.state
           
			const data={
        
                Name:Name,
                Quantity:Quantity,
                Unitary_quantity:Unitary_quantity,
                Status:Status,
                Area_insumo:Area_insumo,
                Id_unit:Id_unit,
                Stock_max:Stock_max,
                Stock_min:Stock_min,
                Stock_alert:Stock_alert,
                Cost:Cost,
                        Id_insumo:Id_insumo
            }
            InsumoUpdate(data).then(()=>{
				//handleOpenSuccessToast()//abrir toast
                handleClose()//cerrar modal
                change();
				//actualizar página
			}, (e) => console.error(e))
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
                <Grid item xs={12}>
                    <TextField name="Stock_max" required label="cantidad Maxima  " value={this.state.Stock_max} onChange={handleChange} margin="normal" fullWidth />

                </Grid>
                <Grid item xs={12}>
                    <TextField name="Stock_min" required label="cantidad minima  " value={this.state.Stock_min} onChange={handleChange} margin="normal" fullWidth />

                </Grid>
                <Grid item xs={12}>
                    <TextField name="Stock_alert" required label="cantidad alerta  " value={this.state.Stock_alert} onChange={handleChange} margin="normal" fullWidth />

                </Grid>
                <Grid item xs={12}>
                    <TextField name="Cost" required label="Costo del insumo  " value={this.state.Cost} onChange={handleChange} margin="normal" fullWidth />

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

export default FormEditKiosk;