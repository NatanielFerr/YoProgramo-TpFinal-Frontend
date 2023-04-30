import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";


@Component({
  selector: 'app-boton-experiencia',
  templateUrl: './boton-experiencia.component.html',
  styleUrls: ['./boton-experiencia.component.css']
})
export class BotonExperienciaComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  irexperiencia() {
    document.getElementById("experiencia")?.scrollIntoView({
      behavior: "smooth"
    });
  }

}
