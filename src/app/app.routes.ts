import { RouterModule, Routes} from '@angular/router';

import {
  AboutComponent,
  EcomentesComponent,
  ProyectoComponent,
  SearchComponent

  } from "./components/index.paginas";


  const app_routes: Routes = [

  { path: 'home', component: EcomentesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'proyecto/:id', component: ProyectoComponent },
  {path: 'search/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
