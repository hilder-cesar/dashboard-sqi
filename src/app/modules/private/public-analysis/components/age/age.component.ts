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
        type: 'column',
        name: 'Total',
        data: this.ageCount.map((age:any) => age.total)
      }]
    };
  }
}