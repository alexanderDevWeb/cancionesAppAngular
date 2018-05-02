import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../providers/canciones.service';
import { Cancion } from '../model/cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {

  canciones: Cancion[];
  cancionSeleccionada: Cancion;
  isValid: boolean;


  // Cancion a crear
  nombreCancion: string;

  // Hay que inyectar el servicio como parammetro del constructor
  constructor(private cancionesService: CancionesService) {
    console.log('CancionesComponent Constructor');
    this.canciones = [];
    this.isValid = false;
  }

  ngOnInit() {
    console.log('CancionesComponent OnInit');
    // Llamadas a los servicios o providers

    // Cargo las canciones
    this.recargar();

    // this.cancionSeleccionada = new Cancion(3, 'Mock');
    // this.cancionSeleccionada.nombre = 'SETTER MOCK';

    // this.cancionSeleccionada = new Cancion(-1, "");

    // this.mockData();

    // this.canciones.push(this.cancionSeleccionada);
  }

  recargar() {
    // Inicializar atributos
    this.canciones = [];
    this.cancionesService.getAll().subscribe(
      resultado => {
        // tslint:disable-next-line:no-console
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );
  }

  nuevaCancion(event) {
    console.log(event.target.parentElement.getElementsByTagName('input')[0].value);

    const el = event.target.parentElement.getElementsByTagName('input')[0].value;

    this.cancionesService.create(el).subscribe(
      resultado => {
        // tslint:disable-next-line:no-console
        console.debug('Creacion correcta %o', resultado);
        this.recargar();

      },
      error => {
        console.warn('Creacion incorrecta %o', error);
      }
    );
  }

  modificar(index: number){
    const cancion = this.canciones[index];
    console.log(`CancionesComponent modificar onfousout cancion: %o`, cancion);
    if ( cancion.nombre.trim().length > 0 ){
      this.cancionesService.modificar(cancion).subscribe(
        result => {
          this.recargar();
        }, error => {
          console.warn('Error al modificar %o', error );
        }
      );
    } else {
      console.warn('Nombre cancion NO valido');
    }
  }// modificarF

  mockData(): any {
    this.canciones.push(new Cancion(1, 'Macarena'));
    this.canciones.push(new Cancion(2, 'Metallica'));
    this.canciones.push(new Cancion(3, 'aaaaaaaa'));
    this.canciones.push(new Cancion(4, 'bbbbbbbbbb'));
    this.canciones.push(new Cancion(5, 'cccccc'));
    this.canciones.push(new Cancion(6, 'kkkkkkk'));
    this.canciones.push(new Cancion(7, 'ppppppppp'));
    this.canciones.push(new Cancion(8, 'qqqq'));
  }

  eliminar(id: number) {
    console.log(`Eliminar ${id}`);
    if (confirm('¿Quieres eliminar la canción?')) {
      this.cancionesService.delete(id).subscribe(
        resultado => {
          // tslint:disable-next-line:no-console
          console.debug('Canción eliminada!');
          this.recargar();
        },
        error => {
          console.warn('Error al eliminar %o', error);
        }
      );
    }
  }

  /**
   * mapea los resultados de formato json a objetos Todo
   * @param resultado
   */
  mapeo(resultado: any) {
    let cancion: Cancion;
    resultado.forEach(el => {
      cancion = new Cancion(el.id, el.nombre);
      this.canciones.push(cancion);
    });
  }
}
