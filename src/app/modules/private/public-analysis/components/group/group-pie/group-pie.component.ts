import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-group-pie',
  templateUrl: './group-pie.component.html',
  styleUrls: ['./group-pie.component.scss']
})
export class GroupPieComponent implements OnChanges {

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  @Input() groupNumber: any = {};
  @Input() totalCount: number = 0;

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.groupNumber.currentValue) {
      this.initChart();
      console.log((100 * this.groupNumber.total) / this.totalCount);
    }
  }

  getColor(): string {
    return 'red';
  }

  initChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        plotShadow: false,
        height: 170,
        
      },
      tooltip: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        pie: {
          borderColor: 'transparent',
          showInLegend: false,
          shadow: true,
          center: ['50%', '50%'],
          innerSize: '80%',
          size: '100%',
          dataLabels: {
            distance: '-100%',
            style: {
              color: 'white',
              fontSize: '16px',
              fontFamily: 'Poppins'
            },
            formatter: () => {
              return `${Math.round((100 * this.groupNumber.total) / this.totalCount)}%`
            }
          }
        }
      },
      title: {
        text: ''
      },
      series: [
        {
          type: 'pie',
          data: [{
            name: 'População',
            color: {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
              stops: [
                [0, '#ff7619'],
                [0.7, '#f2ca30'],
                [1, '#f2ca30']
              ]
            },
            y: (100 * this.groupNumber.total) / this.totalCount
          }, {
            name: '',
            color: 'grey',
            y: 100 - ((100 * this.groupNumber.total) / this.totalCount),
            dataLabels: {
              enabled: false
            },
            
          }],
          // data: seriesData.map((serie: any) => {
          //   return {
          //     name: serie.name,
          //     color: getColor(serie.name),
          //     y: serie.total
          //   };
          // })
        }
      ]
    };
  }

}
