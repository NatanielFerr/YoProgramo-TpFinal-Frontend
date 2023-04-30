import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHabilidadesAddComponent } from './modal-habilidades-add.component';

describe('ModalHabilidadesAddComponent', () => {
  let component: ModalHabilidadesAddComponent;
  let fixture: ComponentFixture<ModalHabilidadesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHabilidadesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHabilidadesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
