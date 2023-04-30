import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonContactoComponent } from './boton-contacto.component';

describe('BotonContactoComponent', () => {
  let component: BotonContactoComponent;
  let fixture: ComponentFixture<BotonContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
