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
        type: 'line',
        backgroundColor: 'transparent',
        height: 500
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      tooltip: {
        enabled: true
      },
      xAxis: {
        categories: this.getCategories(),
        tickmarkPlacement: 'on',
        gridLineWidth: 1,
        title: {
          text: ''
        },
        labels: {
          enabled: true,
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
            type: 'line',
            name: 'Total',
            data: this.sentimentByTime.map((sentiment:any) => sentiment.total),
            color: '#009245'
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
      return series.range || `${date.getDay()}/${date.getMonth() + 1}`;
    });
  }

}
