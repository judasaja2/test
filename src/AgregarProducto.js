import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ListaInventario from './ListaInventario.js';
import Login from './Login.js';

export default class agregarProducto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      precio: "",
      sku: "",
      cantidad: "",
      mensaje: "",
      agregado: false,
      skuAvailable: ""
    }
    this.tomarNombre = this.tomarNombre.bind(this);
    this.tomarCantidad = this.tomarCantidad.bind(this);
    this.tomarSku = this.tomarSku.bind(this);
    this.tomarPrecio = this.tomarPrecio.bind(this);
    this.guardarProducto = this.guardarProducto.bind(this);
    this.comprobarSku = this.comprobarSku.bind(this);
    this.aumentarProducto = this.aumentarProducto.bind(this);
  }

  tomarNombre(e) {
    this.setState({nombre: e.target.value})
  }

  tomarCantidad(e) {
    this.setState({cantidad: e.target.value})
  }

  tomarSku(e) {
    this.setState({sku: e.target.value})
  }

  tomarPrecio(e) {
    this.setState({precio: e.target.value})
  }

  comprobarSku() {
    let skuAv = true;
    for (let producto in ListaInventario) {
      if (ListaInventario[producto].sku == this.state.sku) {
        this.setState({
          mensaje: "El código " + this.state.sku + " ya está registrado al producto: '" + ListaInventario[producto].nombre + "' y sólo es posible aumentar su cantidad."
        });
        skuAv = false;
      }
    }
    if (skuAv == true) {
      this.setState({mensaje: "El código está disponible para ser registrado, puede añadir un nombre al producto, una cantidad y precio por unidad."})
    }
    this.skuAvailable = skuAv;
  }

  guardarProducto() {
    let empty = true;
    if (this.state.nombre != null && this.state.cantidad != null && this.state.cantidad >= 0 && this.state.precio >= 0 && this.state.sku != null && this.state.precio != null) {
      this.setState({mensaje: "No pueden haber campos vacíos"})
      empty = false;
    }
    if (this.state.skuAvailable && !empty) {
      ListaInventario.push({nombre: `${this.state.nombre}`, cantidad: `${this.state.cantidad}`, sku: `${this.state.sku}`, precio: `${this.state.precio}`});
      this.setState({mensaje: "El producto ha sido agregado con éxito."});
    }
  }

  aumentarProducto() {
    let empty2 = true;
    if (this.state.cantidad > 0) {
      this.setState({mensaje: "La cantidad debe ser mayor que cero"})
      empty2 = false;
    }
    if (!empty2) {
      for (let producto in ListaInventario) {
        if (ListaInventario[producto].sku == this.state.sku) {
          ListaInventario[producto].cantidad = parseInt(this.state.cantidad) + parseInt(ListaInventario[producto].cantidad);
          this.setState({
            mensaje: "Se han aumentado las existencias del producto seleccionado en: " + this.state.cantidad + ". Para un total de " + ListaInventario[producto].cantidad + " unidades del producto."
          });
        }
      }
    }
  }

  render() {
    let contentToShow = null;
    if (this.skuAvailable == true) {
      contentToShow = [
        <p>Nombre:&nbsp;
          <input type="text" placeholder="Nombre del Producto" onChange={this.tomarNombre} onFocus={this.value = ""}/></p>,
        <p>Cantidad:&nbsp;
          <input type="text" placeholder="Cantidad del Producto" onChange={this.tomarCantidad} onFocus={this.value = ""}/></p>,
        <p>Precio:&nbsp;
          <input type="text" placeholder="Precio del Producto" onChange={this.tomarPrecio} onFocus={this.value = ""}/></p>,
        <p><input type="button" value="Confirmar" onClick={this.guardarProducto}/></p>
      ]
    } else if (this.skuAvailable == false) {
      contentToShow = [
        <p>Cantidad:&nbsp;
          <input type="text" placeholder="Cantidad del Producto" onChange={this.tomarCantidad} onFocus={this.value = ""}/>&nbsp;*mayor a 0</p>,
        <p><input type="button" value="Confirmar" onClick={this.aumentarProducto}/></p>
      ]
    }
    return (<div>
      <center>
        <h2>Agregar producto o existencias</h2>
        <p>Puedes buscar un producto por medio de una búsqueda. Escribe el Nombre del producto o el Sku para realizar la búsqueda.</p>
        <p>Sku:&nbsp;
          <input type="text" placeholder="Sku del Producto" onChange={this.tomarSku} onFocus={this.value = ""}/>
          <input type="button" value="Comprobar Sku" onClick={this.comprobarSku}/>
        </p>
        {contentToShow}
        <p>{this.state.mensaje}</p>
      </center>
    </div>)
  }
}
