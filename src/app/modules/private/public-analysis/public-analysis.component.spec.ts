import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAnalysisComponent } from './public-analysis.component';

describe('PublicAnalysisComponent', () => {
  let component: PublicAnalysisComponent;
  let fixture: ComponentFixture<PublicAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
