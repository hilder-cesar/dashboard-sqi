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
        type: 'spline',
        backgroundColor: 'transparent',
        height: '80%'
      },
      title: {
        text: ''
      },
      tooltip: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: this.ageCount.map((age: any) => age.name),
        tickmarkPlacement: 'on',
        gridLineWidth: 0,
        gridLineInterpolation: 'circle',
        alternateGridColor: 'rgba(255,255,255, .05)',
        title: {
          text: ''
        },
        labels: {
          style: {
            color: 'white',
            fontSize: '14px',
            fontFamily: 'Poppins'
          }
        }
      },
      yAxis: {
        tickmarkPlacement: 'on',
        gridLineWidth: 1,
        gridLineDashStyle: 'Dash',
        gridLineColor: 'rgba(255,255,255, .04)',
        title: {
          text: ''
        },
        labels: {
          style: {
            color: 'white',
            fontSize: '14px',
            fontFamily: 'Poppins'
          }
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        spline: {
          borderColor: 'transparent',
          lineWidth: 5,
          borderWidth: 1,
          dataLabels: {
            enabled: true,
            useHTML: true,
            position: 'center',
            align: 'center',
            padding: 10,
            y: -10,
            borderRadius: 50,
            borderColor: 'white',
            color: 'white',
            borderWidth: 1,
            style: {
              fontSize: '14px',
              fontFamily: 'Poppins'
            }
          }
        }
      },
      series: [
        {
          type: 'spline',
          name: 'Total',
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, '#f2ca30'],
              [0.3, '#f2ca30'],
              [1, '#ff7619']
            ]
          },
          data: this.ageCount.map((age: any) => age.total)
        }
      ]
    };
  }
}