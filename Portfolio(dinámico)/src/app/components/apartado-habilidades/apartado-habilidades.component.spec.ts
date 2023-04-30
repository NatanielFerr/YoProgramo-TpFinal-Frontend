import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoHabilidadesComponent } from './apartado-habilidades.component';

describe('ApartadoHabilidadesComponent', () => {
  let component: ApartadoHabilidadesComponent;
  let fixture: ComponentFixture<ApartadoHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartadoHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartadoHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
