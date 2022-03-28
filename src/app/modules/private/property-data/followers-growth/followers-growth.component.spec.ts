import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersGrowthComponent } from './followers-growth.component';

describe('FollowersGrowthComponent', () => {
  let component: FollowersGrowthComponent;
  let fixture: ComponentFixture<FollowersGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowersGrowthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
