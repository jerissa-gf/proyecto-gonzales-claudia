import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productos: Product[] = [
    {
      id: 1,
      imagen: 'assets/images/leche-condensada-pil.webp',
      mensaje: 'LECHE CONDENSADA',
      precio: 12,
      descripcion: 'PRODUCTO LÁCTEO'
    },
    {
      id: 2, 
      imagen: 'assets/images/dulceDeLeche.jpg',
      mensaje: 'DULCE DE LECHE', 
      precio: 16, 
      descripcion: 'PRODUCTO LÁCTEO'},
    {
      id: 3, 
      imagen: 'assets/images/lecheEvaporada.webp',
      mensaje: 'LECHE EVAPORADA', 
      precio: 11, 
      descripcion: 'PRODUCTO LÁCTEO'
    },
    {
      id: 4,
      imagen: 'assets/images/leche-condensada-pil.webp',
      mensaje: 'LECHE CONDENSADA',
      precio: 12,
      descripcion: 'PRODUCTO LÁCTEO'
    },
    {
      id: 5, 
      imagen: 'assets/images/dulceDeLeche.jpg',
      mensaje: 'DULCE DE LECHE', 
      precio: 16, 
      descripcion: 'PRODUCTO LÁCTEO'},
    {
      id: 6, 
      imagen: 'assets/images/lecheEvaporada.webp',
      mensaje: 'LECHE EVAPORADA', 
      precio: 11, 
      descripcion: 'PRODUCTO LÁCTEO'
    },
    {
      id: 7,
      imagen: 'assets/images/leche-condensada-pil.webp',
      mensaje: 'LECHE CONDENSADA',
      precio: 12,
      descripcion: 'PRODUCTO LÁCTEO'
    },
    {
      id: 8, 
      imagen: 'assets/images/dulceDeLeche.jpg',
      mensaje: 'DULCE DE LECHE', 
      precio: 16, 
      descripcion: 'PRODUCTO LÁCTEO'},
    {
      id: 9, 
      imagen: 'assets/images/lecheEvaporada.webp',
      mensaje: 'LECHE EVAPORADA', 
      precio: 11, 
      descripcion: 'PRODUCTO LÁCTEO'
    },
    {
      id: 10,
      imagen: 'assets/images/leche-condensada-pil.webp',
      mensaje: 'LECHE CONDENSADA',
      precio: 12,
      descripcion: 'PRODUCTO LÁCTEO'
    },
    {
      id: 11, 
      imagen: 'assets/images/dulceDeLeche.jpg',
      mensaje: 'DULCE DE LECHE', 
      precio: 16, 
      descripcion: 'PRODUCTO LÁCTEO'},
    {
      id: 12, 
      imagen: 'assets/images/lecheEvaporada.webp',
      mensaje: 'LECHE EVAPORADA', 
      precio: 11, 
      descripcion: 'PRODUCTO LÁCTEO'
    }
  ];

  private productosSubject = new BehaviorSubject<Product[]>(this.productos);
  productos$ = this.productosSubject.asObservable();
  
  private carrito: any[] = [];
  private carritoSubject = new BehaviorSubject<any[]>(this.carrito);
  carrito$ = this.carritoSubject.asObservable();


  getProductos() {
    return this.productos;
  }

  getProductoPorId(id: number): Product | undefined {
    return this.productos.find(producto => producto.id === id);
  }

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
    // Notifica los cambios
    this.carritoSubject.next(this.carrito); 
  }

  getCarrito() {
    // Retorna el observable
    return this.carrito$; 
  }

  getCantidadEnCarrito(){
    return this.carrito.length;
  }
}
