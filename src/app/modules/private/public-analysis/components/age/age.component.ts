import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// Chart
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnChanges {

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  @Input() ageCount!: any;

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.ageCount.currentValue) {
      this.initChart();
    }
  }

  initChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: this.ageCount.map((age: any) => age.name),
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
        gridLineWidth: 1,
        gridLineDashStyle: 'Dash',
        gridLineColor: 'rgba(255,255,255, .3',
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
        enabled: true,
        align: 'right',
        layout: 'horizontal',
        squareSymbol: true,
        symbolRadius: 0,
        itemStyle: {
          color: 'white'
        }
      },
      plotOptions: {
        column: {
          borderColor: 'transparent',
        }
      },
      series: [
        {
          type: 'column',
          name: 'FEMININO',
          color: {
            linearGradient: { x1: 1, y1: 1, x2: 1, y2: 0 },
            stops: [
              [0, '#fd4a95'],
              [0.5, '#fd4a95'],
              [1, '#ff9954']
            ]
          },
          data: this.ageCount.map((age: any) => age.total)
        },
        {
          type: 'column',
          name: 'TOTAL',
          color: {
            linearGradient: { x1: 1, y1: 1, x2: 1, y2: 0 },
            stops: [
              [0, '#494be1'],
              [1, '#ff6de8']
            ]
          },
          data: this.ageCount.map((age: any) => age.total)
        },
        {
          type: 'column',
          name: 'MASCULINO',
          color: {
            linearGradient: { x1: 1, y1: 1, x2: 1, y2: 0 },
            stops: [
              [0, '#38a0ee'],
              [1, '#8356ee']
            ]
          },
          data: this.ageCount.map((age: any) => age.total)
        }
      ]
    };
  }
}