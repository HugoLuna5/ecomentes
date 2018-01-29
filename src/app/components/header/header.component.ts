import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {

  constructor( public _is:InformacionService, private router:Router){



  }


  buscar_proyecto( termino:string){

    this.router.navigate( ['search', termino] );
  }

}