import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// Chart
import * as Highcharts from 'highcharts';
import { Sentiment, SentimentTime } from 'src/app/utils/interfaces/sentiment.interface';

@Component({
  selector: 'app-sentiment-hour',
  templateUrl: './sentiment-hour.component.html',
  styleUrls: ['./sentiment-hour.component.scss']
})
export class SentimentHourComponent implements OnChanges {

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  @Input() sentimentByTime!: any;

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.sentimentByTime.currentValue) {
      this.initChart();
    }
  }

  initChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'spline',
        backgroundColor: 'transparent',
        height: '290px'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      xAxis: {
        categories: this.getCategories(),
        tickmarkPlacement: 'on',
        gridLineWidth: 0,
        gridLineInterpolation: 'circle',
        alternateGridColor: 'rgba(255,255,255, .05)',
        title: {
          text: ''
        },
        labels: {
          enabled: true,
          useHTML: true,
          style: {
            color: 'white'
          },
        }
      },
      yAxis: {
        tickmarkPlacement: 'on',
        gridLineWidth: 1,
        gridLineInterpolation: 'circle',
        gridLineColor: 'rgba(255,255,255,.3)',
        gridLineDashStyle: 'Dash',
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
        spline: {
          allAreas: true,
          color: 'white',
          lineWidth: 5,
          borderWidth: 1,
          dataLabels: {
            enabled: false,
          },
          label: {
            style: {
              color: 'white'
            }
          }
        }
      },

      series:
        [
          {
            type: 'spline',
            name: 'Total',
            data: this.sentimentByTime.map((sentiment: any) => sentiment.total),
            color: {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                [0, '#f2ca30'],
                [0.3, '#f2ca30'],
                [1, '#ff7619']
              ]
            }
          }
        ]
    };
  }


  getSeries(seriesType: Sentiment): any {
    const seriesValue = this.sentimentByTime;
    let seriesValueArr: any = {
      positive: [],
      negative: [],
      impartial: []
    };
    seriesValue.forEach((serie: SentimentTime) => {
      seriesValueArr[seriesType].push(serie[seriesType]);
    });
    return seriesValueArr[seriesType];
  }

  getCategories(): any {
    const seriesValue = this.sentimentByTime;
    return seriesValue.map((series: SentimentTime) => {
      const date = new Date(series.dateString);
      const day = date.getDay();
      const month = date.getMonth() + 1;
      return series.range || `${day >= 10 ? day : '0' + day} <br/> ${month >= 10 ? month : '0' + month}`;
    });
  }

}
