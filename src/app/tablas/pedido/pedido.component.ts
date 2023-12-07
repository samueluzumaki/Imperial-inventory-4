import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedido:any;
  
  art={
    idPedido:"",	
    Nombre_pedido:"",	
    Cantidad:"",
    idProveedor:"",		
    id_Producto:""	
  }



  constructor(private pedidoServicio: PedidoService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.pedidoServicio.recuperarTodos().subscribe((result:any) => this.pedido = result);
  }

  alta() {
    this.pedidoServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(idPedido:number) {
    this.pedidoServicio.baja(idPedido).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.pedidoServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(idPedido:number) {
    this.pedidoServicio.seleccionar(idPedido).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}
