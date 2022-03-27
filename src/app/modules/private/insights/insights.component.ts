import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { AlertService } from 'src/app/utils/services/alert/alert.service';
import { FilterService } from 'src/app/utils/services/filter/filter.service';
import { GenericService } from 'src/app/utils/services/generic/generic.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent extends OnDestroyClass implements OnInit {

  constructor (
    private genericService: GenericService,
    private filterService: FilterService,
    private alert: AlertService
  ) { super(); }

  ngOnInit(): void {
    this.filterService.filterData
      .pipe(takeUntil(this.onDestroy), debounceTime(1000))
      .subscribe(() => {
        const filterData = cloneDeep(this.filterService.filterData.getValue());
        filterData.startDate = filterData.startDate ? new Date(filterData.startDate).toISOString() : null;
        filterData.endDate = filterData.endDate ? new Date(filterData.endDate + 'T23:59:59').toISOString() : null;
        this.getInsightsFollowers(filterData);
        this.getInsightsInteractions(filterData);
      });
  }

  getInsightsFollowers(filterData: any): void {
    this.genericService.post('insights/growth-followers/last-week', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getInsightsInteractions(filterData: any): void {
    this.genericService.post('insights/interactions/last-week', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

}
