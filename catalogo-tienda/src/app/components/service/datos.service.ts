import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproducto } from 'src/app/models/i-producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/';
  }

  getProductos(): Observable<Iproducto[]> {
    let direccion = this.url + 'productos';
    return this.http.get<Iproducto[]>(direccion);
  }

  getProductoById(id:any): Observable<Iproducto> {
    let direccion = this.url + 'productos/' + id;
    return this.http.get<Iproducto>(direccion);
  }

}


