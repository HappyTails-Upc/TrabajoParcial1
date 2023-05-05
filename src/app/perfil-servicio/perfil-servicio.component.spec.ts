import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilServicioComponent } from './perfil-servicio.component';

describe('PerfilServicioComponent', () => {
  let component: PerfilServicioComponent;
  let fixture: ComponentFixture<PerfilServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilServicioComponent]
    });
    fixture = TestBed.createComponent(PerfilServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
