import { Injectable } from '@angular/core';
import { Cancion } from '../model/cancion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT = 'http://localhost:8080/cancion/';

@Injectable()
export class CancionesService {
  constructor(public http: HttpClient) {
    console.log('CancionesService constructor');
  }

  // Retorna todos los coches que tenemos en stock
  getAll(): Observable<any> {
    console.log('CancionesService getAll');

    return this.http.get(END_POINT);

    /*
    this.canciones = [];
    let cancion;

    const jsonData = [{id: -1, nombre: ''}]; // JSON.parse();

    jsonData.forEach(element => {
      cancion = new Cancion(
        element.id,
        element.nombre
      );

      this.canciones.push(cancion);


    });

    return this.canciones;
  */
 }

 create(nombre): Observable<any> {
  console.log('CancionesService create');

  return this.http.post(END_POINT, {'id': -1, 'nombre': nombre} );
  // return this.http.post(END_POINT, JSON.parse('{"id": -1, "nombre": "' + nombre + '"}') );
 }

 delete(id: number): Observable<any> {
   const url = END_POINT + id;
  return this.http.delete(url);
 }

 modificar(cancion: Cancion): Observable<any>{
  const url = END_POINT + cancion.id;
  console.log(`CancionesService modificar ${url} cancion: %o`, cancion);
  const body = cancion;
  return this.http.put(url, body);
}
}
