import { Directive, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgbDate, NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { OnDestroyClass } from "./on-destroy.class";

@Directive()
export abstract class FilterContainerClass extends OnDestroyClass implements OnInit {

  filterData = {} as any;
  filterForm: FormGroup;

  // Input Date
  hoveredDate: NgbDate | null = null;

  constructor (
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router,
    protected _formBuilder: FormBuilder,
    public _ngbParser: NgbDateParserFormatter
  ) {

    super();

    this.filterForm = _formBuilder.group({
      startDate: [null],
      endDate: [null],
      socialNetwork: [[]],
      gender: [[]],
      network: [[]],
      politicalPos: [[]],
      mentions: [[]],
      subjects: [[]],
      age: [[]],
      groups: [[]],
      checked: [true],
      limit: [10],
      author: [''],
      content: [''],
      sentiment: ['']
    });

    this.filterForm.valueChanges
      .subscribe((value) => {
        this.updateQueryParams(value);
      });

  }

  ngOnInit(): void {
    this._activatedRoute.queryParams
      .subscribe((params: Params) => {
        this.filterData = params !== undefined ? params : this.filterData;
        this.filterForm.patchValue(this.filterData);
      });
  }

  protected handleParam(param: any): any {
    if(typeof param === 'string'){
      return [param];
    }
    return param;
  }

  protected updateQueryParams(params: Params): void {
    this._router.navigate([], { relativeTo: this._activatedRoute, queryParams: params, queryParamsHandling: 'merge' });
  }

  get startDate(): AbstractControl {
    return this.filterForm.controls.startDate;
  }

  get endDate(): AbstractControl {
    return this.filterForm.controls.endDate;
  }

  parseDate(): string {
    return this.startDate.value && this.endDate.value ? `${this.startDate.value} a ${this.endDate.value}` : 'DATA';
  }

  isHovered(date: NgbDate): any {
    return this.startDate.value &&
      !this.endDate.value &&
      this.hoveredDate &&
      date.after(this._ngbParser.parse(this.startDate.value)) &&
      date.before(this.hoveredDate);
  }

  isInside(date: NgbDate): any {
    return this.endDate &&
      date.after(this._ngbParser.parse(this.startDate.value)) &&
      date.before(this._ngbParser.parse(this.endDate.value));
  }

  isRange(date: NgbDate): any {
    return date.equals(this._ngbParser.parse(this.startDate.value)) ||
      (this._ngbParser.parse(this.endDate.value) && date.equals(this._ngbParser.parse(this.endDate.value))) ||
      this.isInside(date) || this.isHovered(date);
  }

  onDateSelection(date: NgbDate): void {
    if (!this.startDate.value && !this.endDate.value) {
      this.startDate.setValue(this._ngbParser.format(date));
    } else if (this.startDate.value && !this.endDate.value && !date.before(this.startDate.value)) {
      this.endDate.setValue(this._ngbParser.format(date));
    } else {
      this.endDate.setValue(null);
      this.startDate.setValue(this._ngbParser.format(date));
    }
  }

}