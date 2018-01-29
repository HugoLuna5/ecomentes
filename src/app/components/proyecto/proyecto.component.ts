import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProyectosService } from '../../services/proyectos.service'


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html'
})
export class ProyectoComponent {

  proyecto:any = undefined;
  cod:string = undefined;


  constructor( public route:ActivatedRoute, public _ps:ProyectosService) {

    route.params.subscribe( parametros => {

      //console.log(parametros);
      //console.log(parametros['id']);

      _ps.cargar_proyecto(parametros['id'])
          .subscribe( res => {
              this.cod = parametros['id'];
              this.proyecto = res.json();
              //console.log(this.proyecto);
          })
    })


   }



}
