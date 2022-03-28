import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPieComponent } from './group-pie.component';

describe('GroupPieComponent', () => {
  let component: GroupPieComponent;
  let fixture: ComponentFixture<GroupPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
