import React, { Component } from 'react';
import MostrarCodigos from './MostrarCodigos.js';
import ListaCodigos from './ListaCodigos.js';

export default class codigos extends Component{
	render(){
		let cadaCodigo =[];

		ListaCodigos.forEach((codigos) =>{
				cadaCodigo.push(<MostrarCodigos codigos={codigos} key={codigos.codigo}/>);
			});

		return(
				<center>
				<div><h3>CODIGOS</h3>
				<table className= "App-tablas">
					<thead>
						<tr>
							<th>Codigo</th>
							<th>Fecha Creacion</th>
							<th>Fecha Activacion</th>
							<th>Descuento</th>
              <th>Beneficiario</th>
						</tr>
					</thead>
					<tbody>
						{cadaCodigo}
					</tbody>
				</table>
				</div>
				</center>
			);
	}
}
