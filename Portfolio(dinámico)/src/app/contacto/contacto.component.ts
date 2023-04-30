import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contacto } from '../models/contacto';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  Form: FormGroup;
  submitted: boolean = false;
  success: boolean = false;

  nombre_y_apellido:'';
  telefono:'';
  email:'';
  asunto:'';
  mensaje:'';


  constructor(private formBuilder: FormBuilder,private sContacto:ContactoService) {
    
     }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      nombre_y_apellido: [''],
      telefono: [''],
      email: [''],
      asunto: [''],
      mensaje: ['']
      });
  }

  onSubmit() {
    this.submitted = true;

    if (this.Form.invalid) {
      return;
    }
  }


  Send():void{
    const contacto = new Contacto (this.asunto,this.email,this.mensaje,
      this.nombre_y_apellido,this.telefono);
     this.sContacto.submit(contacto).subscribe(
      data => {
      alert("Mail Enviado");
      this.asunto='';
      this.email='';
      this.mensaje='';
      this.telefono='';
      this.nombre_y_apellido='';
    
    })
  }

}
