import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class GenerarCodigo extends Component{
	render(){
    return(
      <div>
      <center>
      <p>Generar Código </p>
      <p><input type="text" placeholder="Comprador Beneficiario" onChange={this.tomarNombre} onFocus={this.value=""}/></p>
      <p><input type="button" value="Guardar " onClick={this.guardarProducto}/></p>
      </center>
      </div>
    )
  }
}
