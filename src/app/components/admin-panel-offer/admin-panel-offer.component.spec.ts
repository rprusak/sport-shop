import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelOfferComponent } from './admin-panel-offer.component';

describe('AdminPanelOfferComponent', () => {
  let component: AdminPanelOfferComponent;
  let fixture: ComponentFixture<AdminPanelOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
