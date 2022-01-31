import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentHourComponent } from './sentiment-hour.component';

describe('SentimentHourComponent', () => {
  let component: SentimentHourComponent;
  let fixture: ComponentFixture<SentimentHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentHourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
