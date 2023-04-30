import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-modal-educacion-add',
  templateUrl: './modal-educacion-add.component.html',
  styleUrls: ['./modal-educacion-add.component.css']
})
export class ModalEducacionAddComponent implements OnInit {
  form: FormGroup;
  nivel: '';
  institucion: '';
  img : any;
  descripcion: '';
  link : '';
  inicio:'';
  fin:'';
  educaciones: Educacion[]=[];
  personaid: number = 1 ;

  constructor(private formBuilder: FormBuilder, private sEducacion: EducacionService) { 
    this.form = this.formBuilder.group({
      id:[''],
      nivel: ['',[Validators.required]],
      institucion:[''],
      img:[''],
      descripcion:['',[Validators.required]],
      link:[''],
      inicio:['',[Validators.required]],
      fin:[''],
      personaid:['']
    })
  }

  ngOnInit(): void { 
  }
  cargarEducacion():void {
    this.sEducacion.lista().subscribe(data =>{
      this.educaciones = data;
    });
  }

  get Nivel(){
    return this.form.get("nivel");
  }
  
  get NivelInvalid(){
    return this.Nivel?.touched && !this.Nivel.valid;
  }
  
  get Institucion(){
    return this.form.get("institucion");
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
  
  get Descripcion(){
    return this.form.get("descripcion_cargo");
  }
  
  get DescripcionInvalid(){
    return this.Descripcion?.touched && !this.Descripcion.valid;
  }
  
  get Img(){
    return this.form.get("img");
  }
  
  get Link(){
    return this.form.get("link");
  }
  
  get Personaid(){
    return this.form.get("personaid");
  }

  onCreate():void{
    let educacion = this.form.value;
  
    if (educacion.id == '') {
      this.sEducacion.save(educacion).subscribe(
        error =>{
          alert();
          this.form.reset();
          window.location.reload();
        },
        data => {
          alert("Su nueva educacion fue añadida correctamente");
          this.form.reset();
          window.location.reload();
        })
  }
  }

  limpiar():void{
    this.form.reset();
  }
  
  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onCreate();
    }else{
      alert("falló al agregar la educacion, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }


}
