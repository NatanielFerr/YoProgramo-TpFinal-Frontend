import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-modal-proyectos-add',
  templateUrl: './modal-proyectos-add.component.html',
  styleUrls: ['./modal-proyectos-add.component.css']
})
export class ModalProyectosAddComponent implements OnInit {
  form: FormGroup;
  proyecto: '';
  inicio: '';
  fin: '';
  descripcion: '';
  tecnologia: '';
  logo: any;
  link: '';
  proyectos: Proyecto[]=[];
  personaid: number = 1 ;


  constructor(private formBuilder:FormBuilder, private sproye: ProyectoService) { 
    this.form = this.formBuilder.group({
      id:[''],
      proyecto:['', [Validators.required]],
      inicio:['', [Validators.required]],
      fin:[''],
      descripcion:['', [Validators.required]],
      tecnologia:[''],
      logo:[''],
      link:[''],
      personaid:['']
    })
  }

  get Proyecto(){
    return this.form.get("proyecto");
  }

  get ProyectoInvalid(){
    return this.Proyecto?.touched && !this.Proyecto.valid;
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
    return this.form.get("descripcion");
  }

  get DescripcionInvalid(){
    return this.Descripcion?.touched && !this.Descripcion.valid;
  }

  get Tecnologia(){
    return this.form.get("tecnologia");
  }

  get Logo(){
    return this.form.get("logo");
  }

  get Link(){
    return this.form.get("link");
  }

  get Personaid(){
    return this.form.get("personaid");
  }
  
 

  

  ngOnInit(): void {
  }

  cargarProyecto():void {
    this.sproye.lista().subscribe(data =>{
      this.proyectos = data;
    });
  }

  onCreate():void{
    let proyecto = this.form.value;
  
    if (proyecto.id == '') {
      this.sproye.save(proyecto).subscribe(
        error =>{
          alert();
          this.form.reset();
          window.location.reload();
        },
        data => {
          alert("Su nuevo proyecto fue añadido correctamente");
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
      alert("falló al agregar el proyecto, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
