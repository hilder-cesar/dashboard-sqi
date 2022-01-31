import { Component, OnInit } from '@angular/core';

// Chart
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sentiment-hour',
  templateUrl: './sentiment-hour.component.html',
  styleUrls: ['./sentiment-hour.component.scss']
})
export class SentimentHourComponent implements OnInit {

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: 'transparent',
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['0-2h', '4-6h', '8-10h'],
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
          label:{
            style: {
              color: 'white'
            }
          }
        }
      },

      series: [
        {
          type: 'line',
          name: 'Positivas',
          data: [502, 635, 809],
          color: '#009245'
        },
        {
          type: 'line',
          name: 'Negativas',
          data: [106, 107, 111],
          color: '#e91c13'
        },
        {
          type: 'line',
          name: 'Neutras',
          data: [163, 203, 276],
          color: '#f7c911'
        },
        {
          type: 'line',
          name: 'Sem qualificação',
          data: [18, 31, 54],
          color: '#ccc'
        }
      ]
    };
  }

}
