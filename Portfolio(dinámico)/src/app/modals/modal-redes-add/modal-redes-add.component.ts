import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Red } from 'src/app/models/red';
import { RedService } from 'src/app/services/red.service';

@Component({
  selector: 'app-modal-redes-add',
  templateUrl: './modal-redes-add.component.html',
  styleUrls: ['./modal-redes-add.component.css']
})
export class ModalRedesAddComponent implements OnInit {

  redes: Red[]=[];

//Modal redes add//
form: FormGroup;
red = new Red("","","","",1);
logo: '';
link: '';
denominacion: '';
personaid: number = 1 ;
  constructor(private sRed:RedService, private formBuilder: FormBuilder) {
    //Modal redes add//
    this.form = this.formBuilder.group({
      id:[''],
      denominacion:['',[Validators.required]],
      logo:['',[Validators.required, Validators.pattern('[a-z]*')]],
      link:['',[Validators.required]],
      personaid:['']
    }) 
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



  ngOnInit(): void {
  }

  cargarRed():void {
    this.sRed.lista().subscribe(data =>{
      this.redes = data;
    });
  }

  onCreate():void{
    let rede = this.form.value;
  
    if (rede.id == '') {
      this.sRed.save(rede).subscribe(
        error =>{
          alert();
          this.form.reset();
          window.location.reload();
        },
        data => {
          alert("Su nueva red fue añadida correctamente");
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
      alert("falló al agregar la red, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
