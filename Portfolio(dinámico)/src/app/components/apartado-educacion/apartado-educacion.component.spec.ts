import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoEducacionComponent } from './apartado-educacion.component';

describe('ApartadoEducacionComponent', () => {
  let component: ApartadoEducacionComponent;
  let fixture: ComponentFixture<ApartadoEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartadoEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartadoEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
