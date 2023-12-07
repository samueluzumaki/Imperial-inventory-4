
import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/inventario.service';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {	
  inventario:any;
  art={
    idInventario:"",	
    Id_Productos:"",	
    Entradas:"",
    Salidas:"",	
    Saldo:""	
  }


  constructor(private inventarioServicio: InventarioService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.inventarioServicio.recuperarTodos().subscribe((result:any) => this.inventario = result);
  }

  alta() {
    this.inventarioServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(idInventario:number) {
    this.inventarioServicio.baja(idInventario).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.inventarioServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(idInventario:number) {
    this.inventarioServicio.seleccionar(idInventario).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}
