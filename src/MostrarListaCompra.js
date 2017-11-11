import React, { Component } from 'react';

export default class MostrarListaCompra extends Component{
	render(){
		return(
			<tr>
					<td>{this.props.producto.sku}</td>
					<td>{this.props.producto.nombre}</td>
					<td>{this.props.producto.cantidad}</td>
			</tr>
			);
	}
}
