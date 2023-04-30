import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoProyectosComponent } from './apartado-proyectos.component';

describe('ApartadoProyectosComponent', () => {
  let component: ApartadoProyectosComponent;
  let fixture: ComponentFixture<ApartadoProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartadoProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartadoProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
