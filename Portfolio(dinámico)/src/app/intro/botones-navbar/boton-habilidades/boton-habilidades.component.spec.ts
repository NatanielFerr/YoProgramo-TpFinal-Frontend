import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonHabilidadesComponent } from './boton-habilidades.component';

describe('BotonHabilidadesComponent', () => {
  let component: BotonHabilidadesComponent;
  let fixture: ComponentFixture<BotonHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
