import React, { Component } from 'react';

export default class MostrarCodigos extends Component{
	render(){
		return(
			<tr>
					<td>{this.props.codigos.codigo}</td>
					<td>{this.props.codigos.fecha_creacion}</td>
					<td>{this.props.codigos.fecha_activacion}</td>
					<td>{this.props.codigos.descuento}</td>
          <td>{this.props.codigos.beneficiario}</td>
			</tr>
			);
	}
}
