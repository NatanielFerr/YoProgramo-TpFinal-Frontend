import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { AuthService } from 'src/app/services/auth.service';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  form: FormGroup;
  personas : Persona[]=[];
  persona = new Persona("","","","","","","","");
  contrasenia: string;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private ruta: Router, private sPersona : PersonaService) { 
    this.form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      contrasenia:['',[Validators.required, Validators.maxLength(12), Validators.minLength(4)]],
   })

  }

  ngOnInit(): void {
    this.cargarPersona();
  }

  get Contrasenia(){
    return this.form.get("contrasenia");
  }
  
  get ContraseniaValid(){
    return this.Contrasenia?.touched && !this.Contrasenia?.valid;
  }

  get Mail(){
   return this.form.get("email");
  }
  
  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }



  onLogin(event: Event){

    event.preventDefault; 
 
    if (this.form.valid){
      
    }else{
      this.form.markAllAsTouched(); 
    }
 
  }

  cargarPersona():void {
    this.sPersona.verpersonas().subscribe(data =>{
      this.personas = data;
    });
  }
  
  onEnviarlogin(event:Event){
    event.preventDefault;
    if (this.form.valid){
    this.authService.IniciarSesion(this.form.value).subscribe(data =>{
    
      console.log("DATA: " + JSON.stringify(data));
      window.location.reload();
    
    }),
      () =>{
      window.location.reload();
    }
    }
  }
  
}
