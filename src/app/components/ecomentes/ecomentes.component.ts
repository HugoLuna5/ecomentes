import { Component } from '@angular/core';
import { ProyectosService } from "../../services/proyectos.service";
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-ecomentes',
  templateUrl: './ecomentes.component.html'
})
export class EcomentesComponent  {
   
  constructor( public _ps:ProyectosService ) {



  }


}
