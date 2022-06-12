import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PveStatsComponent } from './pve-stats.component';

describe('PveStatsComponent', () => {
  let component: PveStatsComponent;
  let fixture: ComponentFixture<PveStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PveStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PveStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
