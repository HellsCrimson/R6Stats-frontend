import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponPvpStatsComponent } from './weapon-pvp-stats.component';

describe('WeaponPvpStatsComponent', () => {
  let component: WeaponPvpStatsComponent;
  let fixture: ComponentFixture<WeaponPvpStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponPvpStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPvpStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
