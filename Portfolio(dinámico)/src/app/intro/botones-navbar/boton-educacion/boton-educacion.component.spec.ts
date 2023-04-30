import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEducacionComponent } from './boton-educacion.component';

describe('BotonEducacionComponent', () => {
  let component: BotonEducacionComponent;
  let fixture: ComponentFixture<BotonEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
