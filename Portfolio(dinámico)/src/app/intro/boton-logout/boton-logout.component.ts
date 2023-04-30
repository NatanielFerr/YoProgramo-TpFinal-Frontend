import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-boton-logout',
  templateUrl: './boton-logout.component.html',
  styleUrls: ['./boton-logout.component.css']
})
export class BotonLogoutComponent implements OnInit {
  modoEdicion: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdicion = false;
    } else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdicion = false;
    } else{
      this.modoEdicion = true;
    }
  }

}
