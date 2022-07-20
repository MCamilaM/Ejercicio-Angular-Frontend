import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ProductosComponent } from '../productos/productos.component';
import {AppComponent} from './app.component'

const routes: Routes = [
  { path: 'productos', component: ProductosComponent},
  //{ path: 'nosotros', component: NosotrosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'productos'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
