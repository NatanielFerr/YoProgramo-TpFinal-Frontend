import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAcercadeComponent } from './boton-acercade.component';

describe('BotonAcercadeComponent', () => {
  let component: BotonAcercadeComponent;
  let fixture: ComponentFixture<BotonAcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonAcercadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
