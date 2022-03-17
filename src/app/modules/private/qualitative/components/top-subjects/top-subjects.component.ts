import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// Chart
import * as Highcharts from 'highcharts';
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
        backgroundColor: 'transparent',
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.topSubjects.map((subject: any) => subject.name),
        height: '100%',
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
          data: this.getSeries(Sentiment.positive),
          color: '#009245'
        },
        {
          type: 'bar',
          name: 'Negativos',
          data: this.getSeries(Sentiment.negative),
          color: '#e91c13'
        },
        {
          type: 'bar',
          name: 'Neutras',
          data: this.getSeries(Sentiment.impartial),
          color: '#f7c911'
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
