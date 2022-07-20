import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from '../productos/productos.component';
import {AppComponent} from './app.component'

const routes: Routes = [
  { path: '**', pathMatch: 'full', redirectTo: 'productos'},
  { path: 'productos', component: ProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
