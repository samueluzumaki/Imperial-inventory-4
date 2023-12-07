import { Component, OnInit } from '@angular/core';
import { DetalleProductoService } from 'src/app/detalle-producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit{
  
  detalle_producto:any;
    
    art={
      idDetalle_producto:"",	
      Nombre:"",	
      Tipo:"",
      Cantidad:""
    
    }

    constructor(private detalleproductosServicio: DetalleProductoService) {}

    ngOnInit() {
      this.recuperarTodos();
    }

    recuperarTodos() {
      this.detalleproductosServicio.recuperarTodos().subscribe((result:any) => this.detalle_producto= result);
    }

    alta() {
      this.detalleproductosServicio.alta(this.art).subscribe((datos:any) => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
        }
      });
    }

    baja(idDetalle_producto:number) {
      this.detalleproductosServicio.baja(idDetalle_producto).subscribe((datos:any) => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
        }
      });
    }

    modificacion() {
      this.detalleproductosServicio.modificacion(this.art).subscribe((datos:any) => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
          this.recuperarTodos();
        }
      });    
    }
    
    seleccionar(idDetalle_producto:number) {
      this.detalleproductosServicio.seleccionar(idDetalle_producto).subscribe((result:any) => this.art = result[0]);
    }

    hayRegistros() {
      return true;
    } 
}
