import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/models/experiencia';
import { AuthService } from 'src/app/services/auth.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { InfoService } from 'src/app/services/info.service';


@Component({
  selector: 'app-apartado-experiencia',
  templateUrl: './apartado-experiencia.component.html',
  styleUrls: ['./apartado-experiencia.component.css']
})
export class ApartadoExperienciaComponent implements OnInit {

  modoEdicion: any;
  experiencias: Experiencia[]=[];
  Listaexperiencias: any;

  //Modal experiencias edit//
  form: FormGroup;
  expe = new Experiencia("","","","","","","","",1);
    nombre : '';
    cargo : '';
    inicio : '';
    fin : '';
    descripcion_cargo : '';
    logo : any;
    link : '';
    actual : '';
    personaid: number = 1;

  constructor(private authService: AuthService, private sExperiencia:ExperienciaService, 
    private formBuilder: FormBuilder) {
      //Modal experiencias edit//
      this.form = this.formBuilder.group({
        id:[''],
        nombre:['',[Validators.required]],
        cargo:['',[Validators.required]],
        inicio:['',[Validators.required]],
        fin:[''],
        descripcion_cargo:['',[Validators.required]],
        logo:[''],
        link:[''],
        actual:[''],
        personaid:['']
      }) 
     }

  ngOnInit(): void {
    this.cargarExperiencia();
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }
 
  }


  cargarExperiencia():void {
    this.sExperiencia.lista().subscribe(data =>{
      this.experiencias = data;
    });
  }

  //Modal experiencias edit//
get Nombre(){
  return this.form.get("nombre");
}

get NombreInvalid(){
  return this.Nombre?.touched && !this.Nombre.valid;
}

get Cargo(){
  return this.form.get("cargo");
}

get CargoInvalid(){
  return this.Cargo?.touched && !this.Cargo.valid;
}

get Inicio(){
  return this.form.get("inicio");
}

get InicioInvalid(){
  return this.Inicio?.touched && !this.Inicio.valid;
}

get Fin(){
  return this.form.get("fin");
}

get Descripcion_cargo(){
  return this.form.get("descripcion_cargo");
}

get Descripcion_cargoInvalid(){
  return this.Descripcion_cargo?.touched && !this.Descripcion_cargo.valid;
}

get Logo(){
  return this.form.get("logo");
}

get Link(){
  return this.form.get("link");
}

get Actual(){
  return this.form.get("actual");
}

get Personaid(){
  return this.form.get("personaid");
}

onUpdate():void{
  let expe = this.form.value;
    this.sExperiencia.update(expe.id, expe).subscribe(
      data => {
        alert('Experiencia editada correctamente');
        window.location.reload();
        this.form.reset();
      })
  }

  detail(id:number){
    this.sExperiencia.detail(id).subscribe(data =>{
      this.form.setValue(data);
    })
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("Falló al editar la experiencia, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

  cerrar():void{
    window.location.reload();
  }

  limpiar():void{
    this.form.reset();
  }

  delete(id: number) {
    this.sExperiencia.delete(id).subscribe(
      error => {
        alert("Falló al eliminar la experiencia, intente nuevamente");
        this.cargarExperiencia();
      },
      data => {
        alert("La experiencia fue eliminada correctamente");
        this.cargarExperiencia();
      }
    )}

}
