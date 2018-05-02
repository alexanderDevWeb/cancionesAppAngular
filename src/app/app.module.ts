import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';

// Services
import { CancionesService } from './providers/canciones.service';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Pipes


@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CancionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
