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
        gridLineWidth: 0,
        gridLineColor: '#9cb4d8',
        lineColor: '#9cb4d8',
        title: {
          text: ''
        },
        labels: {
          useHTML: true,
          style: {
            color: 'white',
            textTransform: "uppercase",
          }
        }
      },
      yAxis: {
        tickmarkPlacement: 'on',
        gridLineWidth: 1,
        gridLineColor: '#9cb4d8',
        lineColor: '#9cb4d8',
        title: {
          text: ''
        },
        labels: {
          useHTML: true,
          style: {
            color: 'white',
            textTransform: "uppercase",
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
        bar: {
          borderColor: 'transparent',
          color: {
            linearGradient: { x1: 1, y1: 1, x2: 1, y2: 0 },
            stops: [
              [0, '#fd4a95'],
              [0.5, '#fd4a95'],
              [1, '#ff9954']
            ]
          },
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
