import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { getColor, getIcon } from 'src/app/utils/functions/social-network.function';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class NetworkComponent implements OnChanges {

  getIcon = getIcon;
  getColor = getColor;

  @Input() socialNetworkCount: any[] = [];
  totalValue: number = 0;

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if(simpleChanges.socialNetworkCount.currentValue){
      this.totalValue = this.socialNetworkCount.reduce((prev, current) => prev + current.total, 0);
    }
  }

  getPercentage(value: number): number {
    return Math.round((100 * value) / this.totalValue);
  }

}
