import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";

//Rutas
 import {app_routing} from "./app.routes";

//Servicios
import { InformacionService } from "./services/informacion.service";
import { ProyectosService } from "./services/proyectos.service";


//firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';


//markdownView
import { MarkdownModule } from 'angular2-markdown';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EcomentesComponent } from './components/ecomentes/ecomentes.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EcomentesComponent,
    AboutComponent,
    ProyectoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
    MarkdownModule.forRoot(),

  ],
  providers: [
    InformacionService,
    ProyectosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
