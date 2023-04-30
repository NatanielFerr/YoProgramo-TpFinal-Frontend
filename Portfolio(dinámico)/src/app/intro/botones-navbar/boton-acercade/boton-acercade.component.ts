import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";
import { top } from '@popperjs/core';


@Component({
  selector: 'app-boton-acercade',
  templateUrl: './boton-acercade.component.html',
  styleUrls: ['./boton-acercade.component.css']
})
export class BotonAcercadeComponent implements OnInit {

  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  iracercademi() {
    document.getElementById("información")?.scrollIntoView({
      behavior: "smooth"
    });
  }

}
