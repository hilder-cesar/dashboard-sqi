import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// Chart
import * as Highcharts from 'highcharts/highstock';
import { Sentiment } from 'src/app/utils/interfaces/sentiment.interface';

@Component({
  selector: 'app-top-subjects',
  templateUrl: './top-subjects.component.html',
  styleUrls: ['./top-subjects.component.scss']
})
export class TopSubjectsComponent implements OnChanges {

  @Input() topSubjects!: any;

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.topSubjects.currentValue) {
      this.initChart();
    }
  }

  initChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'bar',
        backgroundColor: 'transparent'
      },
      title: {
        text: ''
      },
      tooltip: {
        enabled: false
      },
      xAxis: {
        categories: this.topSubjects.map((subject: any) => subject.name),
        min: 0,
        max: this.topSubjects.length >= 10 ? 10 : this.topSubjects.length - 1,
        gridLineWidth: 0,
        lineWidth: 0,
        labels: {
          style: {
            color: 'white',
            fontFamily: 'Poppins',
            fontSize: '14px'
          }
        },
        scrollbar: {
          enabled: true,
          barBorderWidth: 0,
          barBackgroundColor: {
            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
            stops: [
              [0, '#5f6062'],
              [1, '#222429']
            ]
          },
          trackBackgroundColor: {
            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
            stops: [[0, '#2e2e2e'], [1, '#00000']]
          },
          buttonArrowColor: 'transparent',
          buttonBackgroundColor: 'transparent',
          buttonBorderWidth: 0,
          trackBorderWidth: 0,
        }
      },
      yAxis: {
        lineWidth: 0,
        gridLineWidth: 1,
        gridLineColor: 'rgba(255, 255, 255, .05)',
        reversedStacks: false,
        max: this.topSubjects[0].total,
        title: {
          text: '',
          align: 'high'
        },
        labels: {
          enabled: false,
          style: {
            color: 'white'
          }
        }
      },
      credits: {
        enabled: false
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
          pointRange:.9,
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
          name: 'Positivas',
          data: this.getSeries(Sentiment.positive),
          color: {
            linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
            stops: [
              [0, 'rgba(126, 177, 80, .3)'],
              [0.5, '#80b24f'],
              [1, '#7eb150']
            ]
          }
        },
        {
          type: 'bar',
          name: 'Negativas',
          data: this.getSeries(Sentiment.negative),
          color: {
            linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
            stops: [
              [0, 'rgba(200, 69, 34, .3)'],
              [0.5, '#c7373c'],
              [1, '#c84522']
            ]
          }
        },
        {
          type: 'bar',
          name: 'Neutras',
          data: this.getSeries(Sentiment.impartial),
          color: {
            linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 },
            stops: [
              [0, 'rgba(236,189,42,.3)'],
              [0.5, '#f1ca30'],
              [1, '#ecbd2a']
            ]
          }
        }
      ]
    };
  }

  getSeries(seriesType: Sentiment): any {
    const seriesValue = this.topSubjects;
    let seriesValueArr: any = {
      positive: [],
      negative: [],
      impartial: []
    };
    seriesValue.forEach((serie: any) => {
      seriesValueArr[seriesType].push(serie[seriesType]);
    });
    return seriesValueArr[seriesType];
  }

  getCategories(seriesType: Sentiment): any {
    const seriesValue = this.topSubjects[seriesType];
    return seriesValue.map((series: any) => series.time);
  }

}
