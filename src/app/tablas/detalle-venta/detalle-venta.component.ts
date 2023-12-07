import { Component, OnInit } from '@angular/core';
import { DetalleVentaService } from 'src/app/detalle-venta.service';


@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css']
})
export class DetalleVentaComponent implements OnInit {

  detalle_venta:any;
  
  art={
    idDetalle_venta:"",	
    Fecha_venta:"",	
    Cantidad:"",
    Nombre:"",		
    idProducto:""	
  }


  constructor(private detalle_ventaServicio: DetalleVentaService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.detalle_ventaServicio.recuperarTodos().subscribe((result:any) => this.detalle_venta = result);
  }

  alta() {
    this.detalle_ventaServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(idDetalle_venta:number) {
    this.detalle_ventaServicio.baja(idDetalle_venta).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.detalle_ventaServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(idDetalle_venta:number) {
    this.detalle_ventaServicio.seleccionar(idDetalle_venta).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}
