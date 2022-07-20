import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Iproducto } from 'src/app/models/i-producto.model';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos!: Iproducto[];


  constructor(private dataService: DatosService) {
    this.productos = new Array<Iproducto>();
   }

  ngOnInit() {
    this.getProductos();

  }

  getProductos() {
    this.dataService.getProductos().subscribe((data) => {
      this.productos = data
      console.log(data)
    });
  }

}
