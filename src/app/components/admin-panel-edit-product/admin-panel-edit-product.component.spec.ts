import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelEditProductComponent } from './admin-panel-edit-product.component';

describe('AdminPanelEditProductComponent', () => {
  let component: AdminPanelEditProductComponent;
  let fixture: ComponentFixture<AdminPanelEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelEditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
