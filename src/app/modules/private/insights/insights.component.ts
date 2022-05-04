import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
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

  faTrash = faTrash;
  insightForm: FormGroup;
  insightList: any[] = [];

  constructor (
    private genericService: GenericService,
    private alert: AlertService,
    protected formBuilder: FormBuilder,
    private filterService: FilterService
  ) {
    super();

    this.insightForm = formBuilder.group({
      content: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.filterService.filterData
      .pipe(takeUntil(this.onDestroy), debounceTime(1000))
      .subscribe(() => {
        const filterData = cloneDeep(this.filterService.filterData.getValue());
        filterData.startDate = filterData.startDate ? new Date(filterData?.startDate).toISOString() : null;
        filterData.endDate = filterData.endDate ? new Date(filterData?.endDate + 'T23:59:59').toISOString() : null;
        this.getInsights(filterData);
      });
  }

  getInsights(filterData: any): void {
    this.genericService.post('insights/candidate', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.insightList = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  handleSubmit(): void {
    const insightModel = cloneDeep(this.insightForm.value);
    this.genericService.post('insights', insightModel)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        () => {
          this.alert.showAlertSuccess('Sucesso');
          this.getInsights(this.filterService.filterData);
          this.insightForm.reset();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  handleDelete(insightId: string): void {
    this.genericService.delete(`insights/${insightId}`)
    .pipe(takeUntil(this.onDestroy))
    .subscribe(
      (response: any) => {
        this.alert.showAlertSuccess(response.message);
        this.getInsights(this.filterService.filterData);
      },
      (error: any) => {
        this.alert.showAlertError(error.message);
      }
    )
  }

}
