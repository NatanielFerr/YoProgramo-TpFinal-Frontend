import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesNavbarComponent } from './botones-navbar.component';

describe('BotonesNavbarComponent', () => {
  let component: BotonesNavbarComponent;
  let fixture: ComponentFixture<BotonesNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
