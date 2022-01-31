import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-control-errors',
  templateUrl: './control-errors.component.html',
  styleUrls: ['./control-errors.component.scss']
})
export class ControlErrorsComponent {

  @Input() control?: AbstractControl;

  constructor() { }

}
