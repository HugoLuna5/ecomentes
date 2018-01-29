import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProyectosService {

  proyectos: any[] = [];
  proyectos_filtrado:any[] = [];
  cargando:boolean = true;
  constructor( private http:Http) {

    this.cargar_proyectos();

   }

   public buscar_proyecto( termino:string){

     if( this.proyectos.length === 0){

       this.cargar_proyectos().then( ()=> {
       this.filtrar_proyectos(termino);
       });

     }else{

       this.filtrar_proyectos(termino);

     }



   }

   private filtrar_proyectos(termino:string){

     this.proyectos_filtrado = [];
     termino = termino.toLowerCase();

     this.proyectos.forEach( proy => {

       if ( proy.categoria.indexOf( termino ) >= 0 || proy.titulo.toLowerCase().indexOf( termino ) >= 0){
         this.proyectos_filtrado.push(proy);
       }

     })
   }


  public cargar_proyecto( cod:string){

    return this.http.get(`https://codigotec-b1787.firebaseio.com/proyectos/${ cod }.json`)

  }



  public cargar_proyectos(){
    let promesa = new Promise( ( resolve, reject ) => {

      this.cargando = true;
      this.http.get('https://codigotec-b1787.firebaseio.com/proyectos_idx.json')
          .subscribe( res => {

            console.log(res.json());
            this.cargando = false;
            this.proyectos = res.json();
            resolve();
          })


    });


    return promesa;
  }

}
