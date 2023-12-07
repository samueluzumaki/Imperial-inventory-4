import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/proveedor.service';


@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  proveedor:any;
  
  art={
    idProveedor:"",	
    Nombre:"",	
    Telefono:"",
    Direccion:"",	
    Email:"",	
    id_Producto:""	
  }


  constructor(private proveedorServicio: ProveedorService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.proveedorServicio.recuperarTodos().subscribe((result:any) => this.proveedor = result);
  }

  alta() {
    this.proveedorServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(idProveedor:number) {
    this.proveedorServicio.baja(idProveedor).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.proveedorServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(idProveedor:number) {
    this.proveedorServicio.seleccionar(idProveedor).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}

