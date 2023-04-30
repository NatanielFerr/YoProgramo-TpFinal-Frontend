import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";


@Component({
  selector: 'app-boton-habilidades',
  templateUrl: './boton-habilidades.component.html',
  styleUrls: ['./boton-habilidades.component.css']
})
export class BotonHabilidadesComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  irhabilidades() {
    document.getElementById("habilidades")?.scrollIntoView({
      behavior: "smooth"
    });
  }

}
