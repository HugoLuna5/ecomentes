import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProyectosService } from '../../services/proyectos.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  termino:string = undefined;

  constructor( public route:ActivatedRoute, public _ps:ProyectosService ) {

    route.params.subscribe( parametros => {

      this.termino = parametros['termino'];

      _ps.buscar_proyecto( this.termino )

    })

  }



}
