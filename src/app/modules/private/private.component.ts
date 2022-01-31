import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent {

  faBars = faBars;

  filterForm: FormGroup;
  // Input Date
  hoveredDate: NgbDate | null = null;

  constructor (
    protected formBuilder: FormBuilder,
    public ngbParser: NgbDateParserFormatter
  ) {

    this.filterForm = formBuilder.group({
      date: formBuilder.group({
        beginDate: [null],
        endDate: [null]
      })
    });

  }

  get date(): FormGroup {
    return this.filterForm.controls.date as FormGroup;
  }

  get beginDate(): AbstractControl {
    return this.date.controls.beginDate;
  }

  get endDate(): AbstractControl {
    return this.date.controls.endDate;
  }

  parseDate(): string {
    return this.beginDate.value && this.endDate.value ? `${this.ngbParser.format(this.beginDate.value)} a ${this.ngbParser.format(this.endDate.value)}` : 'Selecione as datas'; 
  }

  isHovered(date: NgbDate): any {
    return this.beginDate.value &&
      !this.endDate.value &&
      this.hoveredDate &&
      date.after(this.beginDate.value) &&
      date.before(this.hoveredDate);
  }

  isInside(date: NgbDate): any {
    return this.endDate &&
      date.after(this.beginDate.value) &&
      date.before(this.endDate.value);
  }

  isRange(date: NgbDate): any {
    return date.equals(this.beginDate.value) ||
      (this.endDate.value && date.equals(this.endDate.value)) ||
      this.isInside(date) || this.isHovered(date);
  }

  onDateSelection(date: NgbDate): void {
    if (!this.beginDate.value && !this.endDate.value) {
      this.beginDate.setValue(date);
    } else if (this.beginDate.value && !this.endDate.value && !date.before(this.beginDate.value)) {
      this.endDate.setValue(date);
    } else {
      this.endDate.setValue(null);
      this.beginDate.setValue(date);
    }
  }

}
