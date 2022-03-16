import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// Chart
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnChanges {

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  @Input() groupCount!: any;

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.groupCount.currentValue) {
      this.initChart();
    }
  }

  initChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'bar',
        backgroundColor: 'transparent',
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        categories: this.groupCount.map((group: any) => group.name),
        tickmarkPlacement: 'on',
        gridLineWidth: 1,
        title: {
          text: ''
        },
        labels: {
          style: {
            color: 'white'
          }
        }
      },
      yAxis: {
        tickmarkPlacement: 'on',
        gridLineWidth: 0,
        title: {
          text: ''
        },
        labels: {
          style: {
            color: 'white'
          }
        }
      },
      legend: {
        enabled: false,
        itemStyle: {
          color: 'white'
        }
      },
      plotOptions: {
        line: {
          allAreas: true,
          color: 'white',
          lineWidth: 5,
          borderWidth: 1,
          label: {
            style: {
              color: 'white'
            }
          }
        }
      },

      series: [{
        type: 'bar',
        name: 'Total',
        data: this.groupCount.map((group: any) => group.total)
      }]
    };
  }

}
