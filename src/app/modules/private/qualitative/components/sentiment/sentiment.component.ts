import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SentimentCountInterface } from 'src/app/utils/interfaces/sentiment.interface';

// Chart
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HC_SolidGauge from 'highcharts/modules/solid-gauge';
import { sentimentWeight } from 'src/app/utils/functions/sentiment.function';
import { cloneDeep } from 'lodash';
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
      this.totalValue = Object.values(this.sentimentCount).reduce((prev, current) => prev + current, 0);
      this.initChart();
    }
  }

  initChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'gauge',
        backgroundColor: 'transparent',
        height: '220px',
      },
      credits: {
        enabled: false
      },
      pane: {
        center: ['50%', '100%'],
        size: '350px',
        startAngle: -90,
        endAngle: 90,
        background: [{
          borderWidth: 0,
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
            stops: [
              [0, '#7cb64f'],
              [0.25, '#b3eb4f'],
              [0.5, '#e7f43a'],
              [0.75, '#e2a828'],
              [1, '#c84320']
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
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
              stops: [
                [0, '#c1c1c1'],
                [1, '#848483']
              ]
            },
            baseLength: '3%',
            baseWidth: 20,
            topWidth: 1,
            borderWidth: 0,
            radius: '80%',
            rearLength: '0%',
          },
          pivot: {
            borderWidth: 0,
            radius: 10,
            backgroundColor: '#c1c1c1'
          }
        }
      },
      title: {
        text: '',
      },
      tooltip: {
        useHTML: true,
        style: {
          fontFamily: 'Poppins'
        },
        formatter: () => {
          return `
            <span class="positive ball"></span>Positivo: ${Math.round((100 * this.sentimentCount.positive) / this.totalValue)}% <br/> 
            <span class="negative ball"></span>Negativo: ${Math.round((100 * this.sentimentCount.negative) / this.totalValue)}% <br/> 
            <span class="impartial ball"></span>Neutro: ${Math.round((100 * this.sentimentCount.impartial) / this.totalValue)}% <br/> 
            <span class="unqualified ball"></span>Não definido: ${Math.round((100 * this.sentimentCount.unqualified) / this.totalValue)}%`;
        }
      },
      yAxis: {
        min: 0,
        max: this.totalValue + 1,
        minorTicks: false,
        tickInterval: this.totalValue / 6,
        lineWidth: 0,
        tickWidth: 2,
        tickLength: 50,
        labels: {
          enabled: false
        }
      },
      series: [
        { type: 'gauge', name: 'Sentimento', data: [this.getSentimentScore()], dataLabels: { enabled: false } }
      ]
    };
  }

  getSentimentScore(): number {
    const sentiment = cloneDeep(this.sentimentCount);
    Object.keys(sentiment)
      .forEach((key) => {
        let sentimentValue = sentiment[key as keyof SentimentCountInterface];
        sentimentValue = sentimentValue * sentimentWeight(key);
        sentiment[key as keyof SentimentCountInterface] = sentimentValue;
      });
    return Object.values(sentiment).reduce((prev, current) => current + prev, 0);
  }

}
