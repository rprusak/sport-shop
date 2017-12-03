import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelEditOrderComponent } from './admin-panel-edit-order.component';

describe('AdminPanelEditOrderComponent', () => {
  let component: AdminPanelEditOrderComponent;
  let fixture: ComponentFixture<AdminPanelEditOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelEditOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelEditOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
