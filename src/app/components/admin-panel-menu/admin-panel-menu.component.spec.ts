import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelMenuComponent } from './admin-panel-menu.component';

describe('AdminPanelMenuComponent', () => {
  let component: AdminPanelMenuComponent;
  let fixture: ComponentFixture<AdminPanelMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
