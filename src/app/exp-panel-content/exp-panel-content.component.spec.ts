import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpPanelContentComponent } from './exp-panel-content.component';

describe('ExpPanelContentComponent', () => {
  let component: ExpPanelContentComponent;
  let fixture: ComponentFixture<ExpPanelContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpPanelContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpPanelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
