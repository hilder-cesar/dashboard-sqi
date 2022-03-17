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
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: this.getCategories(),
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
          name: 'Positivas',
          data: this.getSeries(Sentiment.positive),
          color: '#009245'
        },
        {
          type: 'line',
          name: 'Negativos',
          data: this.getSeries(Sentiment.negative),
          color: '#e91c13'
        },
        {
          type: 'line',
          name: 'Neutras',
          data: this.getSeries(Sentiment.impartial),
          color: '#f7c911'
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
      return series.range;
    });
  }

}
