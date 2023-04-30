import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoExperienciaComponent } from './apartado-experiencia.component';

describe('ApartadoExperienciaComponent', () => {
  let component: ApartadoExperienciaComponent;
  let fixture: ComponentFixture<ApartadoExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartadoExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartadoExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
