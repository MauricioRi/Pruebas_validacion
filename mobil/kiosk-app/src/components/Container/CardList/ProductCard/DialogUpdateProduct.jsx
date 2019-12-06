import React, { Component } from 'react';
import { DialogContent, TextField, DialogActions, Button, Dialog, DialogTitle, Grid, Typography, Switch, FormControlLabel } from '@material-ui/core';
import { productUpdate } from "../../../../services/products";
import { withStyles } from '@material-ui/styles';
import alertifyjs from "alertifyjs";

const useStyles = theme => ({
	media: {
		width: '75%',
	},
	top: {
		backgroundColor: theme.palette.primary.main,
		color: 'white'
	},
	button: {
		margin: 8,
	},
	input: {
		display: 'none',
	},
});

class DialogUpdateProduct extends Component {
	constructor(props) {
		console.log('constructor');

		super(props)
		const { card: { image, price, enable } } = this.props
		this.state = {
			enable,
			price,
			image,
			file: null,
			successToastOpen: false
		}
	}


	render() {
		const { classes, handleClose, open, card: { title, image, price, enable, id } } = this.props
		//metodos de manejo de datos
		const handleOnChangeSwitch = event => {
			this.setState({ enable: event.target.checked });
		};

		const handleOnChangeNumber = event => {
			this.setState({ [event.target.name]: event.target.value });
		}

		const handleOnChangeImage = (event) => {
			const file = event.target.files[0]
			const image = URL.createObjectURL(file)
			this.setState({ image, file })
		}

		const clearDialog = () => {
			this.setState({ image, price, enable })
		}

		//enviar la información a servidor
		const handleSubmit = () => {
			//obtener valores actualizados
			const { price, enable, file } = this.state

			const data = {
				id,//el id pues no cambia .3.
				price,
				enable,
				file,
			}
			console.log(this.state);
			
			productUpdate(data).then(() => {
				handleClose()
				alertifyjs.success('el producto se actualizó correctamente')
				//actualizar página
			}, (e) => console.error(e))

		}

		return (
			<Dialog
				open={open}
				onExited={clearDialog}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
				fullWidth={true}
				maxWidth={'md'}
			>
				<DialogTitle id="form-dialog-title" className={classes.top}>Modificar Producto</DialogTitle>
				<DialogContent>
					<Grid container alignItems={'center'} justify="center">
						<Grid item xs={12} md={6} height="100%" >
							<center>
								<Typography variant={'h4'}>{title}</Typography>
								<img src={this.state.image} alt={title} className={classes.media} />
							</center>
						</Grid>
						<Grid container item xs={12} md={6}>
							<Grid item xs={8}>
								<input
									accept="image/*"
									className={classes.input}
									id="raised-button-file"
									multiple
									type="file"
									onChange={handleOnChangeImage}
								/>
								<label htmlFor="raised-button-file">
									<Button component="span" variant="contained" color="primary" className={classes.button}>
										Subir archivo
								</Button>
								</label>
							</Grid>
							<Grid item xs={4}>
								<FormControlLabel
									control={
										<Switch
											checked={this.state.enable}
											//checked={true}
											inputProps={{ 'aria-label': 'primary checkbox' }}
											onChange={handleOnChangeSwitch} />
									}
									label="Disponible"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									autoFocus
									fullWidth
									name='price'
									type='number'
									margin="dense"
									label={'Cantidad'}
									id='price'
									value={this.state.price}
									error={false}
									helperText=''
									onChange={handleOnChangeNumber} />
							</Grid>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancelar
				</Button>
					<Button onClick={handleSubmit} variant="contained" color="primary">
						Aceptar
				</Button>
				</DialogActions>
			</Dialog>
		);
	}
}
export default withStyles(useStyles)(DialogUpdateProduct);