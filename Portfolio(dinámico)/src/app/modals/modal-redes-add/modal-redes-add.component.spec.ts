import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRedesAddComponent } from './modal-redes-add.component';

describe('ModalRedesAddComponent', () => {
  let component: ModalRedesAddComponent;
  let fixture: ComponentFixture<ModalRedesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRedesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRedesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
