import React, {Component} from 'react';
import MostrarCompras from './MostrarCompras.js';
import ListaCompras from './ListaCompras.js';

export default class Compras extends Component {
  render() {
    let compras = [];
    for (let compra in ListaCompras) {
      compras.push(<MostrarCompras compra={ListaCompras[compra]}/>);
    }
    return (<center>
      <div>
        <h3>Compras</h3>
        <table className= "App-tablas">
          <thead>
            <tr>
              <th>Comprador</th>
              <th>Fecha</th>
              <th>Valor Total</th>
              <th>Código de Descuento</th>
            </tr>
          </thead>
          <tbody>
            {compras}
          </tbody>
        </table>
      </div>
    </center>);
  }
}
