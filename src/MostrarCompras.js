import React, { Component } from 'react';

export default class MostrarCompras extends Component{
	render(){
		return(
			<tr>
					<td>{this.props.compra.buyer}</td>
					<td>{this.props.compra.date}</td>
					<td>{this.props.compra.totalPrice}</td>
					<td>{this.props.compra.discountCode}</td>
			</tr>
			);
	}
}
