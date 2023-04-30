import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoAcercademiComponent } from './apartado-acercademi.component';

describe('ApartadoAcercademiComponent', () => {
  let component: ApartadoAcercademiComponent;
  let fixture: ComponentFixture<ApartadoAcercademiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartadoAcercademiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartadoAcercademiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
