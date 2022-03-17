import { Component, Input } from '@angular/core';
import { getIcon, getColor } from 'src/app/utils/functions/gender.function';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent {

  getIcon = getIcon;
  getColor = getColor;

  @Input() genderCount: any[] = [];

}
