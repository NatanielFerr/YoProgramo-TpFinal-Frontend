import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cv } from 'src/app/models/cv';
import { Persona } from 'src/app/models/persona';
import { AuthService } from 'src/app/services/auth.service';
import { CvService } from 'src/app/services/cv.service';
import { InfoService } from 'src/app/services/info.service';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-pie-de-pagina',
  templateUrl: './pie-de-pagina.component.html',
  styleUrls: ['./pie-de-pagina.component.css']
})
export class PieDePaginaComponent implements OnInit {
  modoEdicion: any;
  cvs: Cv[]=[];
  personas : Persona[]=[];
  Listacvs: any;

//Modal información edit//
form: FormGroup;
cvv = new Cv("","","",1);
link: '';
nombre: '';
anio_derechos: '';
personaid: number = 1 ;


  constructor(private authService: AuthService, private sCv:CvService, private sPersona:PersonaService, 
    private formBuilder: FormBuilder) {
      //Modal información edit//
      this.form = this.formBuilder.group({
        id:[''],
        nombre:['',[Validators.required]],
        link:[''],
        anio_derechos: ['',[Validators.required]],
        personaid:['']
      })
     }

  ngOnInit(): void {
    this.cargarCv();
    this.cargarPersona();
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }
  }

  cargarCv():void {
    this.sCv.lista().subscribe(data =>{
      this.cvs = data;
    });
  }

  cargarPersona():void {
    this.sPersona.verpersonas().subscribe(data =>{
      this.personas = data;
    });
  }

  //Modal información edit//
get Nombre(){
  return this.form.get("nombre");
}

get Link(){
  return this.form.get("link");
}

get Descargacv(){
  return this.form.get("anio_derechos");
}

get Personaid(){
  return this.form.get("personaid");
}

onUpdate():void{
  let cvv = this.form.value;
    this.sCv.update(cvv.id, cvv).subscribe(
      data => {
        alert('Información editada correctamente');
        window.location.reload();
        this.form.reset();
      })
  }

  detail(id:number){
    this.sCv.detail(id).subscribe(data =>{
      this.form.setValue(data);
    })
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("Falló al editar la información, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

  cerrar():void{
    window.location.reload();
  }

  limpiar():void{
    this.form.reset();
  }

}
