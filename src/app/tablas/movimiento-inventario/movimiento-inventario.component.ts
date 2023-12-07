
import { Component, OnInit } from '@angular/core';
import { MovimientoInventarioService } from 'src/app/movimiento-inventario.service';


@Component({
  selector: 'app-movimiento-inventario',
  templateUrl: './movimiento-inventario.component.html',
  styleUrls: ['./movimiento-inventario.component.css']
})
export class MovimientoInventarioComponent implements OnInit {

  movimiento_inventario:any;
  
  art={
    id_Movimiento_inventario:"",	
    Fecha_movimiento:"",	
    Tipo_movimiento:"",
    Id_producto:"",	
    Cantidad:"",
    Factura:"",
    Orden_pedido:"",
    Venta_producto:"",	
    Id_Usuarios:""	
  }


  constructor(private movimientoinventarioServicio: MovimientoInventarioService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.movimientoinventarioServicio.recuperarTodos().subscribe((result:any) => this.movimiento_inventario= result);
  }

  alta() {
    this.movimientoinventarioServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(id_Movimiento_inventario:number) {
    this.movimientoinventarioServicio.baja(id_Movimiento_inventario).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.movimientoinventarioServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(id_Movimiento_inventario:number) {
    this.movimientoinventarioServicio.seleccionar(id_Movimiento_inventario).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}

