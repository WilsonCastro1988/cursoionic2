import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormSumaComponent } from './form-suma/form-suma.component';
import {OperationsService} from './operations.service';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './service/movies.service';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [ // para registrar componentes
    AppComponent,
    ListComponent,
    FormComponent,
    FormSumaComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [ // para registrar modulos
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [OperationsService, MoviesService], // aqui se registran los servicios
  bootstrap: [AppComponent] // lista de componenetes a inicializar al mismo tiempo cuando se inicie el app 
})
export class AppModule { }
