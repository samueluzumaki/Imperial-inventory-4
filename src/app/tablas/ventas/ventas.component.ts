
import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventas:any;
  
  art={
    idVentas:"",	
    Nombre:"",	
    Salidas:"",
    Fecha_salida:""	
  }


  constructor(private ventasServicio: VentasService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.ventasServicio.recuperarTodos().subscribe((result:any) => this.ventas = result);
  }

  alta() {
    this.ventasServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(idVentas:number) {
    this.ventasServicio.baja(idVentas).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.ventasServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(idVentas:number) {
    this.ventasServicio.seleccionar(idVentas).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}

