import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpStatsComponent } from './pvp-stats.component';

describe('PvpStatsComponent', () => {
  let component: PvpStatsComponent;
  let fixture: ComponentFixture<PvpStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvpStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvpStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
