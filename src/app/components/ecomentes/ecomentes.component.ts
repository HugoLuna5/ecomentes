import { Component } from '@angular/core';
import { ProyectosService } from "../../services/proyectos.service"

@Component({
  selector: 'app-ecomentes',
  templateUrl: './ecomentes.component.html'
})
export class EcomentesComponent  {

  constructor( public _ps: ProyectosService) { }


}
