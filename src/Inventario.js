import React, { Component } from 'react';
import MostrarInventario from './MostrarInventario.js';
import ListaInventario from './ListaInventario.js';


export default class inventario extends Component{
	render(){
		let cadaproducto =[];
		let boton = [];
		let termino = null;

		ListaInventario.forEach((inventario) =>{
				if(inventario.id !== termino) {
					cadaproducto.push(<MostrarInventario inventario={inventario} key={inventario.sku}/>);
				}
				termino = inventario.sku;
			});


		return(
				<center>
				<div><h3>INVENTARIO</h3>
				<table className= "App-tablas">
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Cantidad</th>
							<th>Sku</th>
							<th>Precio</th>
						</tr>
					</thead>
					<tbody>
						{cadaproducto}
					</tbody>
				</table>
				</div>
				</center>
			);
	}
}
