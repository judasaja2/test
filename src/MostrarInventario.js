import React, { Component } from 'react';

export default class MostrarInventario extends Component{
	render(){
		return(
			<tr>
					<td>{this.props.inventario.nombre}</td>
					<td>{this.props.inventario.cantidad}</td>
					<td>{this.props.inventario.sku}</td>
					<td>{this.props.inventario.precio}</td>
			</tr>
			);
	}
}
