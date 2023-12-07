import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { ProveedorComponent } from './tablas/proveedor/proveedor.component';
import { CategoriasComponent } from './tablas/categorias/categorias.component';
import { PedidoComponent } from './tablas/pedido/pedido.component';
import { DetalleProductoComponent } from './tablas/detalle-producto/detalle-producto.component';
import { DetalleVentaComponent } from './tablas/detalle-venta/detalle-venta.component';
import { RolesComponent } from './tablas/roles/roles.component';
import { TipoMovimientoComponent } from './tablas/tipo-movimiento/tipo-movimiento.component';
import { VentasComponent } from './tablas/ventas/ventas.component';
import { InventarioComponent } from './tablas/inventario/inventario.component';
import { UsuariosComponent } from './tablas/usuarios/usuarios.component';
import { MovimientoInventarioComponent } from './tablas/movimiento-inventario/movimiento-inventario.component';


@NgModule({
  declarations: [
    AppComponent,
    ProveedorComponent,
    PedidoComponent,
    CategoriasComponent,
    DetalleProductoComponent,
    DetalleVentaComponent,
    RolesComponent,
    TipoMovimientoComponent,
    VentasComponent,
    InventarioComponent,
    UsuariosComponent,
    MovimientoInventarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }