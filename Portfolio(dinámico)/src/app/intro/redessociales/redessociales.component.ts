import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Red } from 'src/app/models/red';
import { AuthService } from 'src/app/services/auth.service';
import { InfoService } from 'src/app/services/info.service';
import { RedService } from 'src/app/services/red.service';


@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redessociales.component.html',
  styleUrls: ['./redessociales.component.css']
})
export class RedessocialesComponent implements OnInit {
modoEdicion: any;

redes: Red[]=[];

//Modal redes edit//
form: FormGroup;
red = new Red("","","","",1);
logo: '';
link: '';
denominacion: '';
personaid: number = 1 ;

  constructor(private authService: AuthService, private sRed:RedService, 
    private formBuilder: FormBuilder) {
      //Modal redes edit//
      this.form = this.formBuilder.group({
        id:[''],
        denominacion:['',[Validators.required]],
        logo:['',[Validators.required, Validators.pattern('[a-z]*')]],
        link:['',[Validators.required]],
        personaid:['']
      }) 
     }

     

  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }
    this.cargarRed();
  }

  cargarRed():void {
    this.sRed.lista().subscribe(data =>{
      this.redes = data;
    });
  }

  //Modal redes edit//

get Denominacion(){
  return this.form.get("denominacion");
}

get DenominacionInvalid(){
  return this.Denominacion?.touched && !this.Denominacion.valid;
}

get Link(){
  return this.form.get("link");
}

get LinkInvalid(){
  return this.Link?.touched && !this.Link.valid;
}

get Logo(){
  return this.form.get("logo");
}

get LogoInvalid(){
  return this.Logo?.touched && !this.Logo.valid;
}

get Personaid(){
  return this.form.get("personaid");
}

onUpdate():void{
  let rede = this.form.value;
    this.sRed.update(rede.id, rede).subscribe(
      data => {
        alert('Red editada correctamente');
        window.location.reload();
        this.form.reset();
      })
  }

  detail(id:number){
    this.sRed.detail(id).subscribe(data =>{
      this.form.setValue(data);
    })
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("Falló al editar la red, intente nuevamente");
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
    this.sRed.delete(id).subscribe(
      error => {
        alert("Falló al eliminar la red, intente nuevamente");
        this.cargarRed();
      },
      data => {
        alert("La red fue eliminada correctamente");
        this.cargarRed();
      }
    )}


}
