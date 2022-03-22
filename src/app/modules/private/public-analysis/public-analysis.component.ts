import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { AlertService } from 'src/app/utils/services/alert/alert.service';
import { FilterService } from 'src/app/utils/services/filter/filter.service';
import { GenericService } from 'src/app/utils/services/generic/generic.service';

@Component({
  selector: 'app-public-analysis',
  templateUrl: './public-analysis.component.html',
  styleUrls: ['./public-analysis.component.scss']
})
export class PublicAnalysisComponent extends OnDestroyClass implements OnInit {

  groupCount: any[] = [];
  ageCount: any[] = [];
  socialNetworkCount: any[] = [];
  genderCount: any[] = [];

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
        filterData.startDate = filterData.startDate ? new Date(filterData.startDate).toISOString() : null;
        filterData.endDate = filterData.endDate ? new Date(filterData.endDate + 'T23:59:59').toISOString() : null;
        this.getGroupCount(filterData);
        this.getAgeCount(filterData);
        this.getNetworkCount(filterData);
        this.getGenderCount(filterData);
      });
  }

  getGroupCount(filterData: any): void {
    this.genericService.post('group/count', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.groupCount = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getAgeCount(filterData: any): void {
    this.genericService.post('age/count', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.ageCount = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getNetworkCount(filterData: any): void {
    this.genericService.post('social-network/count', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.socialNetworkCount = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getGenderCount(filterData: any): void {
    this.genericService.post('gender/count', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.genderCount = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

}
