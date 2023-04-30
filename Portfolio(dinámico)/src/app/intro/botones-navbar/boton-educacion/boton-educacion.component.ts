import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";


@Component({
  selector: 'app-boton-educacion',
  templateUrl: './boton-educacion.component.html',
  styleUrls: ['./boton-educacion.component.css']
})
export class BotonEducacionComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  ireducacion() {
    document.getElementById("educación")?.scrollIntoView({
      behavior: "smooth"
    });
  }
}
