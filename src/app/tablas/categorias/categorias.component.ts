import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{

  categoria:any;
  
  art={
    Cod_Categoria:"",	
    Tipo:"",	
    Estado:"",
	
  }

  constructor(private categoriaServicio: CategoriasService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.categoriaServicio.recuperarTodos().subscribe((result:any) => this.categoria= result);
  }

  alta() {
    this.categoriaServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(Cod_Categoria:number) {
    this.categoriaServicio.baja(Cod_Categoria).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.categoriaServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(Cod_Categoria:number) {
    this.categoriaServicio.seleccionar(Cod_Categoria).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}
