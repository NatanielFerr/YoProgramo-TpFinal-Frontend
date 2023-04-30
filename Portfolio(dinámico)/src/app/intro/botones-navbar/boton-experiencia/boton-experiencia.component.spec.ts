import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonExperienciaComponent } from './boton-experiencia.component';

describe('BotonExperienciaComponent', () => {
  let component: BotonExperienciaComponent;
  let fixture: ComponentFixture<BotonExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
