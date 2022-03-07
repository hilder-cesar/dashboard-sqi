import { Component } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FilterContainerClass } from 'src/app/utils/classes/filter.class';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent extends FilterContainerClass {

  faBars = faBars;

  // Input Date
  hoveredDate: NgbDate | null = null;

  constructor (
    protected formBuilder: FormBuilder,
    public ngbParser: NgbDateParserFormatter,
    protected router: Router,
    protected activatedRoute: ActivatedRoute
  ) {

    super(activatedRoute, router, formBuilder);

  }

  get beginDate(): AbstractControl {
    return this.filterForm.controls.beginDate;
  }

  get endDate(): AbstractControl {
    return this.filterForm.controls.endDate;
  }

  parseDate(): string {
    return this.beginDate.value && this.endDate.value ? `${this.beginDate.value} a ${this.endDate.value}` : 'Selecione as datas';
  }

  isHovered(date: NgbDate): any {
    return this.beginDate.value &&
      !this.endDate.value &&
      this.hoveredDate &&
      date.after(this.ngbParser.parse(this.beginDate.value)) &&
      date.before(this.hoveredDate);
  }

  isInside(date: NgbDate): any {
    return this.endDate &&
      date.after(this.ngbParser.parse(this.beginDate.value)) &&
      date.before(this.ngbParser.parse(this.endDate.value));
  }

  isRange(date: NgbDate): any {
    return date.equals(this.ngbParser.parse(this.beginDate.value)) ||
      (this.ngbParser.parse(this.endDate.value) && date.equals(this.ngbParser.parse(this.endDate.value))) ||
      this.isInside(date) || this.isHovered(date);
  }

  onDateSelection(date: NgbDate): void {
    if (!this.beginDate.value && !this.endDate.value) {
      this.beginDate.setValue(this.ngbParser.format(date));
    } else if (this.beginDate.value && !this.endDate.value && !date.before(this.beginDate.value)) {
      this.endDate.setValue(this.ngbParser.format(date));
    } else {
      this.endDate.setValue(null);
      this.beginDate.setValue(this.ngbParser.format(date));
    }
  }

}
