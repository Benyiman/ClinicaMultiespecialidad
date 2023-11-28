import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarMedicoComponent } from './ingresar-medico.component';

describe('IngresarMedicoComponent', () => {
  let component: IngresarMedicoComponent;
  let fixture: ComponentFixture<IngresarMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarMedicoComponent]
    });
    fixture = TestBed.createComponent(IngresarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
