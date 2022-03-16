import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Sentiment, SentimentCountInterface } from 'src/app/utils/interfaces/sentiment.interface';

// Chart
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HC_SolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(Highcharts);
HC_SolidGauge(Highcharts);

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnChanges {

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  @Input() sentimentCount!: SentimentCountInterface;
  totalValue: number = 0;

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.sentimentCount.currentValue) {
      this.initChart();
    }
  }

  getPercentage(sentiment: string): number {
    this.totalValue = Object.values(this.sentimentCount).reduce((prev, current) => prev + current);
    switch (sentiment) {
      case 'impartial': return (100 * this.sentimentCount.impartial) / this.totalValue || 0;
      case 'negative': return (100 * this.sentimentCount.negative) / this.totalValue || 0;
      case 'positive': return (100 * this.sentimentCount.positive) / this.totalValue || 0;
      default: return 0;
    }
  }

  initChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'gauge',
        backgroundColor: 'transparent',
        height: '300px'
      },
      pane: {
        center: ['50%', '100%'],
        size: '200%',
        startAngle: -90,
        endAngle: 90,
        background: [{
          borderWidth: 0,
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
            stops: [
              [0, '#019046'],
              [0.5, '#f7c80e'],
              [1, '#ec1b12']
            ]
          },
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
        }]
      },
      plotOptions: {
        gauge: {
          dial: {
            backgroundColor: '#43474f',
            baseLength: '50%',
            borderColor: '#43474f',
            baseWidth: 10,
            borderWidth: 1,
            radius: '100%',
            rearLength: '-25%',
            topWidth: 3,
          },
          pivot: {
            borderWidth: 0,
            radius: 0
          },
        }
      },
      title: {
        text: '',
      },
      yAxis: {
        min: 0,
        max: 2,
        minorTicks: false,
        lineWidth: 0,
        tickWidth: 0,
        labels: {
          enabled: false
        }
      },
      series: [
        { type: 'gauge', name: 'Sentimento', data: [1], dataLabels: { enabled: false } }
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 1440
            },
            chartOptions: {
              pane: {
                center: ['50%', '100%'],
                size: '140%'
              }
            }
          },
          {
            condition: {
              maxWidth: 1024
            },
            chartOptions: {
              chart: {
                height: '400px'
              },
              pane: {
                center: ['50%', '100%'],
                size: '200%'
              }
            }
          },
          {
            condition: {
              maxWidth: 768
            },
            chartOptions: {
              chart: {
                height: '300px'
              },
              pane: {
                center: ['50%', '100%'],
                size: '160%'
              }
            }
          }
        ]
      }
    };
  }

}
