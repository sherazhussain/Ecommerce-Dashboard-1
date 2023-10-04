import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueDataComponent } from './revenue-data.component';

describe('RevenueDataComponent', () => {
  let component: RevenueDataComponent;
  let fixture: ComponentFixture<RevenueDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevenueDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RevenueDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
