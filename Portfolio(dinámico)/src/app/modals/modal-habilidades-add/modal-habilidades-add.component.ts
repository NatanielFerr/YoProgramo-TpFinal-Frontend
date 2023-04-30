import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-modal-habilidades-add',
  templateUrl: './modal-habilidades-add.component.html',
  styleUrls: ['./modal-habilidades-add.component.css']
})
export class ModalHabilidadesAddComponent implements OnInit {
  form: FormGroup;
  nombre: '';
  habilidades: Habilidad[]=[];
  logo: any;
  porcentaje: any;
  personaid: number = 1 ;

  constructor(private formBuilder: FormBuilder, private sHabilidad: HabilidadService) {
    this.form = this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]],
      porcentaje_titulo:[''],
      logo:[''],
      personaid:['']
    })
   }

  
  ngOnInit(): void {
  }

  cargarHabilidad():void {
    this.sHabilidad.lista().subscribe(data =>{
      this.habilidades = data;
    });
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  get NombreInvalid(){
    return this.Nombre?.touched && !this.Nombre.valid;
  }

  get PorcentajeInvalid(){
    return this.Porcentaje?.touched && !this.Porcentaje.valid;
  }

  get Logo(){
    return this.form.get("logo");
  }

  get Personaid(){
    return this.form.get("personaid");
  }


onCreate():void{
  let habilidad = this.form.value;

  if (habilidad.id == '') {
    this.sHabilidad.save(habilidad).subscribe(
       error =>{
        alert();
        this.form.reset();
        window.location.reload();
      },
      data => {
        alert("Su nueva habilidad fue añadida correctamente");
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
    alert("Falló al agregar la habilidad, intente nuevamente");
    this.form.markAllAsTouched();
  }
}

}
