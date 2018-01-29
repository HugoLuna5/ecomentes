import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*

@Injectable()
export class ProyectosService {

  proyectos: any[] = [];
  proyectos_filtrado:any[] = [];
  cargando:boolean = true;

//  items: Observable<any[]>;
//  items2: Observable<any[]>;
  constructor( private http:Http, public db: AngularFireDatabase) {

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

       if ( proy.author.indexOf( termino ) >= 0 || proy.title.toLowerCase().indexOf( termino ) >= 0){
         this.proyectos_filtrado.push(proy);
       }

     })
   }


  public cargar_proyecto( cod:string){

    return this.http.get(`https://ecomentes-1f3d7.firebaseio.com/Ecomentes/${ cod }.json`)

  }



  public cargar_proyectos(){
    let promesa = new Promise( ( resolve, reject ) => {



    //  console.log(this.items)

      this.cargando = true;
      this.http.get('https://codigotec-b1787.firebaseio.com/Ecomentes.json')
          .subscribe( res => {



            this.proyectos = res.json();
            //console.log(res.json());
            this.cargando = false;
          //  this.items = this.db.list('Ecomentes').valueChanges();
          //  console.log(this.items);

          //  this.items2 = this.items;
            resolve();
          })


    });


    return promesa;
  }

}

*/



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

       if ( proy.author.indexOf( termino ) >= 0 || proy.title.toLowerCase().indexOf( termino ) >= 0){
         this.proyectos_filtrado.push(proy);
       }

     })
   }


  public cargar_proyecto( cod:string){

    return this.http.get(`https://ecomentes-1f3d7.firebaseio.com/Ecomentes/${ cod }.json`)

  }



  public cargar_proyectos(){
    let promesa = new Promise( ( resolve, reject ) => {

      this.cargando = true;
      this.http.get('https://codigotec-b1787.firebaseio.com/Ecomentes.json')
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
