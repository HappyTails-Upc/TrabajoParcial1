import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappytailsServicioComponent } from './reserva-servicio.component';

describe('HappytailsServicioComponent', () => {
  let component: HappytailsServicioComponent;
  let fixture: ComponentFixture<HappytailsServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappytailsServicioComponent]
    });
    fixture = TestBed.createComponent(HappytailsServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
