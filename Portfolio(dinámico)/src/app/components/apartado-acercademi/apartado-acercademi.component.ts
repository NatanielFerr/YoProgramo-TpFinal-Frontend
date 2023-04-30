import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { AuthService } from 'src/app/services/auth.service';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-apartado-acercademi',
  templateUrl: './apartado-acercademi.component.html',
  styleUrls: ['./apartado-acercademi.component.css']
})
export class ApartadoAcercademiComponent implements OnInit {
  modoEdicion: any;
  personas : Persona[]=[];

  //Modal información edit//
  form: FormGroup;
  perso = new Persona("","","","","","","","");
  sobre_mi : '';
  nombre : '';
  apellido : '';
  titulo : '';
  imagen : '';
  banner : any;
  email : '';
  contrasenia : ''

    

  constructor(private authService: AuthService, private sPersona:PersonaService, 
    private formBuilder: FormBuilder) {
      //Modal información edit//
      this.form = this.formBuilder.group({
        id:[''],
        sobre_mi:['',[Validators.required]],
        nombre:['',[Validators.required]],
        apellido:['',[Validators.required]],
        titulo:['',[Validators.required]],
        imagen:[''],
        banner:[''],
        email:['', [Validators.required, Validators.email]],
        contrasenia:['',[Validators.required, Validators.maxLength(12), Validators.minLength(4)]]
      }) 
     }

  ngOnInit(): void {
    this.cargarPersona();
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }
  }

  cargarPersona():void {
    this.sPersona.verpersonas().subscribe(data =>{
      this.personas = data;
    });
  }

  //Modal información edit//
get Sobre_mi(){
  return this.form.get("sobre_mi");
}

get Sobre_miInvalid(){
  return this.Sobre_mi?.touched && !this.Sobre_mi.valid;
}

get Nombre(){
  return this.form.get("nombre");
}

get NombreInvalid(){
  return this.Nombre?.touched && !this.Nombre.valid;
}

get Apellido(){
  return this.form.get("apellido");
}

get ApellidoInvalid(){
  return this.Apellido?.touched && !this.Apellido.valid;
}

get Titulo(){
  return this.form.get("titulo");
}

get TituloInvalid(){
  return this.Titulo?.touched && !this.Titulo.valid;
}

get Imagen(){
  return this.form.get("imagen");
}

get Contrasenia(){
  return this.form.get("contrasenia");
}

get ContraseniaInvalid(){
  return this.Contrasenia?.touched && !this.Contrasenia?.valid;
}

get Mail(){
 return this.form.get("email");
}

get MailInvalid() {
  return this.Mail?.touched && !this.Mail?.valid;
}

get Banner(){
  return this.form.get("banner");
}


onUpdate():void{
  let perso = this.form.value;
    this.sPersona.editarpersona(perso.id, perso).subscribe(
      data => {
        alert('Información editada correctamente');
        window.location.reload();
        this.form.reset();
      })
  }

  detail(id:number){
    this.sPersona.detallespersona(id).subscribe(data =>{
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