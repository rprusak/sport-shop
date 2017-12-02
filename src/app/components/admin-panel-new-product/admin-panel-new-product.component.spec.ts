import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelNewProductComponent } from './admin-panel-new-product.component';

describe('AdminPanelNewProductComponent', () => {
  let component: AdminPanelNewProductComponent;
  let fixture: ComponentFixture<AdminPanelNewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelNewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
