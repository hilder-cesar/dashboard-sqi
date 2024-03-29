import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { FilterContainerClass } from 'src/app/utils/classes/filter-container.class';
import { AlertService } from 'src/app/utils/services/alert/alert.service';
import { FilterService } from 'src/app/utils/services/filter/filter.service';
import { GenericService } from 'src/app/utils/services/generic/generic.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent extends FilterContainerClass {

  faBars = faBars;

  // Filters
  ageList: any[] = [];
  genderList: any[] = [];
  // Other filters
  subjectList: any[] = [];
  socialNetworkList: any[] = [];
  groupList: any[] = [];
  positioningList: any[] = [];
  sentimentList: any[] = [
    { name: 'Positivo' },
    { name: 'Negativo' },
    { name: 'Neutro' }
  ];

  constructor (
    protected formBuilder: FormBuilder,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    public ngbParser: NgbDateParserFormatter,
    private genericService: GenericService,
    private alert: AlertService,
    protected filterService: FilterService
  ) {

    super(activatedRoute, router, formBuilder, ngbParser);

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe((params: Params) => {
        this.filterData.startDate = params.startDate !== undefined ? params.startDate : this.filterForm.value.startDate;
        this.filterData.endDate = params.endDate !== undefined ? params.endDate : this.filterForm.value.endDate;
        this.filterData.socialNetwork = params.socialNetwork !== undefined ? this.handleParam(params.socialNetwork) : this.filterForm.value.socialNetwork;
        this.filterData.network = params.network !== undefined ? this.handleParam(params.network) : this.filterForm.value.network;
        this.filterData.age = params.age !== undefined ? this.handleParam(params.age) : this.filterForm.value.age;
        this.filterData.gender = params.gender !== undefined ? this.handleParam(params.gender) : this.filterForm.value.gender;
        this.filterData.politicalPos = params.politicalPos !== undefined ? this.handleParam(params.politicalPos) : this.filterForm.value.politicalPos;
        this.filterData.mentions = params.mentions !== undefined ? this.handleParam(params.mentions) : this.filterForm.value.mentions;
        this.filterData.subjects = params.subjects !== undefined ? this.handleParam(params.subjects) : this.filterForm.value.subjects;
        this.filterData.groups = params.groups !== undefined ? this.handleParam(params.groups) : this.filterForm.value.groups;
        this.filterForm.patchValue(this.filterData);
        this.filterService.filterData.next(this.filterForm.value);
        this.filterService.filterData.next(this.filterData);
      });
    this.getSubjects();
    this.getSocialNetwork();
    this.getGroups();
    this.getGenders();
    this.getAgeList();
    this.getPoliticalPos();
  }

  selectionChange(event: Event, value: any): void {
    const input = event.target as HTMLInputElement;
    let formValue: any[] = cloneDeep(this.filterForm.controls[value.name].value || []);
    if (input.checked) {
      formValue.push(value.value);
    } else {
      formValue = formValue.filter(item => item !== value.value);
    }
    this.filterForm.controls[value.name].setValue(formValue);
  }

  selectionChecked(value: any): boolean {
    const formValue: any[] = this.filterForm.controls[value.name].value || [];
    return formValue.find(item => item === value.value);
  }

  getSubjects(): void {
    this.genericService.get('subject')
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.subjectList = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getSocialNetwork(): void {
    this.genericService.get('social-network')
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.socialNetworkList = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getGroups(): void {
    this.genericService.get('group')
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.groupList = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getGenders(): void {
    this.genericService.get('gender')
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.genderList = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getAgeList(): void {
    this.genericService.get('age')
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.ageList = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getPoliticalPos(): void {
    this.genericService.get('political-profile')
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.positioningList = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }


}
