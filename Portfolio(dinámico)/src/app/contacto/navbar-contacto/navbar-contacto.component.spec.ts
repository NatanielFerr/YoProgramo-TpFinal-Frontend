import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarContactoComponent } from './navbar-contacto.component';

describe('NavbarContactoComponent', () => {
  let component: NavbarContactoComponent;
  let fixture: ComponentFixture<NavbarContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
