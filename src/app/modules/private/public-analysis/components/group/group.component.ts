import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnChanges {

  totalCount: number = 0;
  @Input() groupCount!: any;

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.groupCount.currentValue) {
      this.totalCount = this.groupCount.reduce((prev: number, current: any) => prev + current.total, 0);
    }
  }  

}
