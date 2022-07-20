import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "../header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";
import { ProductosComponent } from "../productos/productos.component";
import { DatosService } from "../service/datos.service";


import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';



@NgModule({
  declarations: [		
    AppComponent,
    ProductosComponent,
    HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RatingModule,
    FormsModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
