import { Component, OnInit } from '@angular/core';

// Chart
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-top-subjects',
  templateUrl: './top-subjects.component.html',
  styleUrls: ['./top-subjects.component.scss']
})
export class TopSubjectsComponent implements OnInit {

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    this.initChart();
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
      xAxis: {
        categories: ['Coronavirus', 'João dória', 'Campanha política'],
        height: 75,
        gridLineWidth: 0,
        lineWidth: 0,
        labels: {
          style: {
            color: 'white'
          }
        }
      },
      yAxis: {
        min: 0,
        lineWidth: 0,
        gridLineWidth: 0,
        reversedStacks: false,
        title: {
          text: ''
        },
        labels: {
          enabled: false,
          style: {
            color: 'white'
          }
        }
      },
      legend: {
        reversed: false,
        itemStyle: {
          color: 'white'
        }
      },
      plotOptions: {
        bar: {
          allAreas: true,
          borderWidth: 0,
          label: {
            style: {
              color: 'white'
            }
          }
        },
        series: {
          stacking: 'normal'
        }
      },
      series: [
        {
          type: 'bar',
          name: 'Positivos',
          data: [5, 3, 4],
          color: '#009245'
        },
        {
          type: 'bar',
          name: 'Negativos',
          data: [2, 2, 3],
          color: '#e91c13'
        },
        {
          type: 'bar',
          name: 'Neutras',
          data: [3, 4, 4],
          color: '#f7c911'
        },
        {
          type: 'bar',
          name: 'Sem qualificações',
          data: [3, 4, 4],
          color: '#ccc'
        }
      ]
    };
  }

}
