import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taxonomiaPlantas_ejercicio';

  // PROPIEDADES
  planta={
    id:0,
    nombre:"",
    reino:"",
    division:"",
    clase:"",
    orden:"",
    familia:"",
    genero:"",
    especie:""
  };

  plantas=[{
    id:1,
    nombre:"Viola Odorata",
    reino:"Plantae",
    division:"Magnoliophyta",
    clase:"Magnoliopsida",
    orden:"Malpighiales",
    familia:"Violaceae",
    genero:"Viola",
    especie:"Viola odorata"
  },
  {
    id:2,
    nombre:"Girasol",
    reino:"Plantae",
    division:"Magnoliophyta",
    clase:"Magnoliopsida",
    orden:"Asterales",
    familia:"Asteraceae",
    genero:"Helianthus",
    especie:"Helianthus Annus"
  },
  {
    id:3,
    nombre:"Cedro Limón",
    reino:"Plantae",
    division:"	Pinophyta",
    clase:"Pinopsida",
    orden:"	Pinales",
    familia:"Cupressaceae",
    genero:"Cupressus",
    especie:"C. macrocarpa"
  },
  {
    id:4,
    nombre:"Rosales",
    reino:"Plantae",
    division:"Magnoliophyta",
    clase:"	Eudicotyledoneae",
    orden:"Rosales",
    familia:"Rosaceae Adans",
    genero:"-",
    especie:"-"
  },
  {
    id:5,
    nombre:"Níspero",
    reino:"	Plantae",
    division:"Magnoliophyta",
    clase:"Magnoliopsida",
    orden:"Rosales",
    familia:"Rosaceae",
    genero:"Mespilus",
    especie:"M. germanica"
  }

  ];


  // formGroup
  // formContacto=new FormGroup({
  //   nombre: new FormControl('',[
  //     Validators.required, // required es que es de awebo
  //     Validators.minLength(10) //el minimo de caracteres
  //   ]),

  //   nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
  //   reino: new FormControl('',[Validators.required]),
  //   clase: new FormControl('',[Validators.required])
  // })
  
  // Función para agregar una plantita
  agregarPlanta(){
    if(this.planta.id==0){alert("El ID debe de ser diferente a 0"); return;}
    for(let i=0; i< this.plantas.length; i++){
      if(this.planta.id == this.plantas[i].id){
        alert("Ya existe Una plantita con ese id 🪴😁, intenta con otro."); 
        return;
      }
    }

    // Agregamos el producto al arreglo
    this.plantas.push({
      id: this.planta.id,
      nombre: this.planta.nombre,
      reino: this.planta.reino,
      division:this.planta.division,
      clase:this.planta.clase,
      orden:this.planta.orden,
      familia: this.planta.familia,
      genero:this.planta.genero,
      especie:this.planta.especie
    });

    // reseteamos el objeto
    this.planta.id=0;
    this.planta.nombre="";
    this.planta.reino="";
    this.planta.clase="";
    this.planta.orden="";
    this.planta.familia="";
    this.planta.genero="";
    this.planta.especie="";
    return;
  }

  // Funcion para seleccionar una planta existente
  seleccionarPlanta(
    plantaSelec:{id:number; nombre:string;
      reino:string;division:string;clase:string;orden:string;
      familia:string;genero:string;especie:string;
    }){
      this.planta.id=plantaSelec.id;
      this.planta.nombre=plantaSelec.nombre;
      this.planta.reino=plantaSelec.reino;
      this.planta.clase=plantaSelec.clase;
      this.planta.orden=plantaSelec.orden;
      this.planta.familia=plantaSelec.familia;
      this.planta.genero=plantaSelec.genero;
      this.planta.especie=plantaSelec.especie
  }

  // Funcion para modificar la taxonomia
  modificarPlanta(){
    for (let i = 0; i < this.plantas.length; i++) {
      if(this.planta.id ==this.plantas[i].id){
        this.plantas[i].nombre=this.planta.nombre;
        this.plantas[i].reino=this.planta.reino;
        this.plantas[i].clase=this.planta.clase;
        this.plantas[i].orden=this.planta.orden;
        this.plantas[i].familia=this.planta.familia;
        this.plantas[i].genero=this.planta.genero;
        this.plantas[i].especie=this.planta.especie;

        // reseteamos el objeto
        this.planta.id=0;
        this.planta.nombre="";
        this.planta.reino="";
        this.planta.clase="";
        this.planta.orden="";
        this.planta.familia="";
        this.planta.genero="";
        this.planta.especie="";
        return;
      }
      
    }
    alert("No existe ese id de plantita🪴🥺");
  }

  // Funcion para eliminar un producto del arreglo
  eliminarPlantita(id:number){
    for (let i = 0; i < this.plantas.length; i++) {
      if(id==this.plantas[i].id){
        this.plantas.splice(i,1);
      }
    }
  }


}
