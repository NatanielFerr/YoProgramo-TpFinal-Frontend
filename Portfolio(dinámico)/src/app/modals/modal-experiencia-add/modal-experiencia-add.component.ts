import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experiencia-add',
  templateUrl: './modal-experiencia-add.component.html',
  styleUrls: ['./modal-experiencia-add.component.css']
})
export class ModalExperienciaAddComponent implements OnInit {
  form: FormGroup;
  nombre : '';
  cargo : '';
  inicio : '';
  fin : '';
  descripcion_cargo : '';
  logo : any;
  link : '';
  actual : '';
  expactual: any;
  experiencias: Experiencia[]=[];
  personaid: number = 1 ;
  
  constructor(private formBuilder: FormBuilder, private sExperiencia: ExperienciaService) { 
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
   
  }

  cargarExperiencia():void {
    this.sExperiencia.lista().subscribe(data =>{
      this.experiencias = data;
    });
  }

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

  onCreate():void{
    let experiencia = this.form.value;
  
    if (experiencia.id == '') {
      this.sExperiencia.save(experiencia).subscribe(
        error =>{
          alert();
          this.form.reset();
          window.location.reload();
        },
        data => {
          alert("Su nueva experiencia fue añadida correctamente");
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
      alert("falló al agregar la experiencia, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
