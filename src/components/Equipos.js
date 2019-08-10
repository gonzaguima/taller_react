import React from 'react';

class Equipo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			teamName: '',
			teamFirstColor: '',
			teamSecondColor: '',
			teamPlayers: [{
				name: '',
				lastName: '',
				birthDate: '',
				number: 0 
			}] //Minimo 5, Maximo 10
		}
	}

	//habilita a cambiar el estado.
	handleChange = event => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};

	onSubmit = event => {
		alert(event)
	}

	render() {
		return (
			<div className="d-flex flex-column justify-content-center mt-5 pt-5">
				<form className="m-auto w-50">
				<div id='equipo'>{/* Datos del equipo */}
					<div className="form-group">
						<label htmlFor="teamName">Nombre del equipo</label>
						{/* input email signup */}
						<input
							type="text"
							className="form-control"
							id="teamName"
							name="teamName"
							placeholder="Ingrese nombre del equipo"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="teamFirstColor">Color primario</label>
						{/* input nombre signup */}
						<input
							type="input"
							className="form-control"
							id="teamFirstColor"
							name="teamFirstColor"
							placeholder="Ingrese el primer color"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="teamSecondColor">Color secundario</label>
						{/* input pass signup */}
						<input
							type="text"
							className="form-control"
							id="teamSecondColor"
							name="teamSecondColor"
							placeholder="Ingrese el segundo color"
						/>
					</div>
					</div>{/*fin datos de equipo*/}

					<div hidden id='jugadores'>
						{/* 
						AGREGAR FORM JUGADORES
						NO PERMITIR QUE AGREGE MENOS DE 5 O MAS DE 10
						CUANDO ESTE SE MUESTRE EL OTRO SE OCULTA
						*/}
					</div>
					{/* <input type='button' onClick={e=>{
						document.getElementById('equipo').hide;
						document.getElementById('jugadores').show;
					}} value='Siguiente' /> */}
					{/* boton enviar signup */}
					<button type="submit" className="btn btn-success">
						Siguiente ->
          </button>
				</form>
			</div>
		);
	}
}

export default Equipo;