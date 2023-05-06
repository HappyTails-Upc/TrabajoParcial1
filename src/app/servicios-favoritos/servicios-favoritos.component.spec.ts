import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosFavoritosComponent } from './servicios-favoritos.component';

describe('ServiciosFavoritosComponent', () => {
  let component: ServiciosFavoritosComponent;
  let fixture: ComponentFixture<ServiciosFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosFavoritosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
