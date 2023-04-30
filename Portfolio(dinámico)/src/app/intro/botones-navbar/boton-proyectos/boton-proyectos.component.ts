import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";


@Component({
  selector: 'app-boton-proyectos',
  templateUrl: './boton-proyectos.component.html',
  styleUrls: ['./boton-proyectos.component.css']
})
export class BotonProyectosComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  irproyectos() {
    document.getElementById("proyectos")?.scrollIntoView({
      behavior: "smooth"
    });
  }

}
