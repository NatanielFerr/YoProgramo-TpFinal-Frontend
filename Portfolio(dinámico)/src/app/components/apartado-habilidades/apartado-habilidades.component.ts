import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/models/habilidad';
import { AuthService } from 'src/app/services/auth.service';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { InfoService } from 'src/app/services/info.service';


@Component({
  selector: 'app-apartado-habilidades',
  templateUrl: './apartado-habilidades.component.html',
  styleUrls: ['./apartado-habilidades.component.css']
})
export class ApartadoHabilidadesComponent implements OnInit {
modoEdicion: any;
habilidades: Habilidad[]=[];
// Listahabilidades: any;

//Modal habilidades edit//
form: FormGroup;
  habi = new Habilidad("","",0,1);
  nombre: '';
  logo: any;
  porcentaje: any;
  personaid: number = 1 ;
  constructor(private authService: AuthService, private sHabilidad:HabilidadService, 
    private formBuilder: FormBuilder) { 
      //Modal habilidades edit//
      this.form = this.formBuilder.group({
        id:[''],
        nombre:['',[Validators.required]],
        porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]],
        logo:[''],
        personaid:['']
      }) 
    }

  ngOnInit(): void {
    this.cargarHabilidad();
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }
  }

  cargarHabilidad():void {
    this.sHabilidad.lista().subscribe(data =>{
      this.habilidades = data;
    });
  }

//Modal habilidades edit//
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


onUpdate():void{
  let habi = this.form.value;
    this.sHabilidad.update(habi.id, habi).subscribe(
      data => {
        alert('Habilidad editada correctamente');
        window.location.reload();
        this.form.reset();
      })
  }

  detail(id:number){
    this.sHabilidad.detail(id).subscribe(data =>{
      this.form.setValue(data);
    })
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("Falló al editar la habilidad, intente nuevamente");
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
  this.sHabilidad.delete(id).subscribe(
    error => {
      alert("Falló al eliminar la habilidad, intente nuevamente");
      this.cargarHabilidad();
    },
    data => {
      alert("La habilidad fue eliminada correctamente");
      this.cargarHabilidad();
    }
  )}

}
