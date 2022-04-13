import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { AlertService } from 'src/app/utils/services/alert/alert.service';
import { GenericService } from 'src/app/utils/services/generic/generic.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent extends OnDestroyClass implements OnInit {

  insightForm: FormGroup;
  insightList: any[] = ['loremipsum', 'loremipsum', 'loremipsum'];

  constructor (
    private genericService: GenericService,
    private alert: AlertService,
    protected formBuilder: FormBuilder
  ) {
    super();

    this.insightForm = formBuilder.group({
      content: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getInsights();
  }

  getInsights(): void {
    this.genericService.get('')
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
    this.genericService.post('', insightModel)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.alert.showAlertSuccess(response.message);
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

}
