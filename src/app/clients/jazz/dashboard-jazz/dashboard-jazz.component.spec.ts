import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJazzComponent } from './dashboard-jazz.component';

describe('DashboardJazzComponent', () => {
  let component: DashboardJazzComponent;
  let fixture: ComponentFixture<DashboardJazzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardJazzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardJazzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
