import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getGenderIcon, getColor } from 'src/app/utils/functions/gender.function';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnChanges {

  getIcon = getGenderIcon;
  getColor = getColor;
  iconCount: number = 25;

  totalValue: number = 0;

  @Input() genderCount: any[] = [];

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.genderCount.currentValue) {
      this.totalValue = this.genderCount.reduce((prev, current) => prev + current.total, 0);
    }
  }

  getPercentage(value: number): number {
    return Math.ceil((100 * value) / this.totalValue);
  }

  getIconPaint(value: number): number {
    const number = this.getPercentage(value);
    return (number / 100) * this.iconCount;
  }

}
