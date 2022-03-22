import { Component } from '@angular/core';
import { cloneDeep } from 'lodash';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { SentimentByTime, SentimentCountInterface } from 'src/app/utils/interfaces/sentiment.interface';
import { AlertService } from 'src/app/utils/services/alert/alert.service';
import { FilterService } from 'src/app/utils/services/filter/filter.service';
import { GenericService } from 'src/app/utils/services/generic/generic.service';

@Component({
  selector: 'app-qualitative',
  templateUrl: './qualitative.component.html',
  styleUrls: ['./qualitative.component.scss']
})
export class QualitativeComponent extends OnDestroyClass {

  sentimentCount!: SentimentCountInterface;
  sentimentByTime!: SentimentByTime;
  topSubjects!: any;

  constructor (
    private genericService: GenericService,
    private alert: AlertService,
    private filterService: FilterService,
  ) { super(); }

  ngOnInit(): void {
    this.getCharts();
  }

  getCharts(): void {
    this.filterService.filterData
      .pipe(takeUntil(this.onDestroy), debounceTime(1000))
      .subscribe(() => {
        const filterData = cloneDeep(this.filterService.filterData.getValue());
        filterData.startDate = filterData.startDate ? new Date(filterData?.startDate).toISOString() : null;
        filterData.endDate = filterData.endDate ? new Date(filterData?.endDate + 'T23:59:59').toISOString() : null;
        this.getSentimentByTime(filterData);
        this.getSentiment(filterData);
        this.getTopSubjects(filterData);
      });
  }

  getSentimentByTime(filterData: any): void {
    this.genericService.post('sentiment/by-time', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.sentimentByTime = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getSentiment(filterData: any): void {
    this.genericService.post('sentiment/count', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.sentimentCount = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getTopSubjects(filterData: any): void {
    this.genericService.post('subject/count', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.topSubjects = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

}
