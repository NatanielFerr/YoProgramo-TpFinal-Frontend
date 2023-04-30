import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { AuthService } from 'src/app/services/auth.service';
import { InfoService } from 'src/app/services/info.service';
import { ProyectoService } from 'src/app/services/proyecto.service';


@Component({
  selector: 'app-apartado-proyectos',
  templateUrl: './apartado-proyectos.component.html',
  styleUrls: ['./apartado-proyectos.component.css']
})
export class ApartadoProyectosComponent implements OnInit {

  proyectos: Proyecto[]=[];
  modoEdicion: any;
  Listaproyectos:any;

  //Modal proyectos edit//
  form:FormGroup;
  proye = new Proyecto("","","","","","","",1);
  proyecto: string = '';
  inicio: string = '';
  fin: string = '';
  descripcion: string = '';
  tecnologia: string = '';
  logo: string = '';
  link: string = '';
  personaid: number = 1 ;

  constructor(private authService: AuthService, 
    private formBuilder: FormBuilder, private sProye: ProyectoService) {
      this.form = this.formBuilder.group({
        id:[''],
        proyecto:['', [Validators.required]],
        inicio:[''],
        fin:[''],
        descripcion:['', [Validators.required]],
        tecnologia:[''],
        logo:[''],
        link:[''],
        personaid:['']
      })
     }

  ngOnInit(): void {
    this.cargarProyecto();
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }

}

  cargarProyecto():void {
    this.sProye.lista().subscribe(data =>{
    this.proyectos=data;
    });
  }

  //Modal proyectos edit//
  get Proyecto(){
    return this.form.get("proyecto");
  }

  get ProyectoInvalid(){
    return this.Proyecto?.touched && !this.Proyecto.valid;
  }
  
  get Inicio(){
    return this.form.get("inicio");
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

  onUpdate():void{
    this.sProye.update(this.proye.id, this.proye).subscribe(data =>{
      alert("Habilidad modificada")
      window.location.reload();
    }, err =>{
      alert("falló al modificar, intente nuevamente");
      window.location.reload();
    }
    )}

    detail(id:number){
      this.sProye.detail(id).subscribe(data =>{
        this.form.setValue(data);
      })
    }

    onEnviar(event:Event){
      event.preventDefault;
      if (this.form.valid){
        this.onUpdate();
      }else{
        alert("falló en la carga, intente nuevamente");
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
    this.sProye.delete(id).subscribe(
      error => {
        alert("Falló al eliminar el proyecto, intente nuevamente");
        this.cargarProyecto();
      },
      data => {
        alert("El proyecto fue eliminado correctamente");
        this.cargarProyecto();
      }
    )}


}