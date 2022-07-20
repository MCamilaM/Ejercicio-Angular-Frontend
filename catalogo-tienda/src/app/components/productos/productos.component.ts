import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Iproducto } from 'src/app/models/i-producto.model';
import { DatosService } from '../service/datos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos!: Iproducto[];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  constructor(private dataService: DatosService, private primengConfig: PrimeNGConfig) {
    this.productos = new Array<Iproducto>();
   }

  ngOnInit() {
    this.getProductos();

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
  ];

  this.primengConfig.ripple = true;
  }

  getProductos() {
    this.dataService.getProductos().subscribe((data) => {
      this.productos = data
      console.log(data)
    });
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
