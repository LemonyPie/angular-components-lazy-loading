import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPopComponent } from './dashboard-pop.component';

describe('DashboardPopComponent', () => {
  let component: DashboardPopComponent;
  let fixture: ComponentFixture<DashboardPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
