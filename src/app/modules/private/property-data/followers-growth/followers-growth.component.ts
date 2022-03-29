import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { dateToFormat } from 'src/app/utils/functions/date.function';

@Component({
  selector: 'app-followers-growth',
  templateUrl: './followers-growth.component.html',
  styleUrls: ['./followers-growth.component.scss']
})
export class FollowersGrowthComponent implements OnInit, OnChanges {

  @Input() followersGrowth: any[] = [];

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    this.initChart();
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.followersGrowth.currentValue) {
      this.initChart();
    }
  }

  initChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: 'transparent'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false,
        reversed: false,
        itemStyle: {
          color: 'white'
        }
      },
      xAxis: {
        categories: this.followersGrowth.map((followers: any) => {
          const date = new Date(followers.name).getTime();
          return dateToFormat(date, 'dd/MM');
        }),
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
      yAxis: {
        tickmarkPlacement: 'on',
        gridLineWidth: 1,
        gridLineDashStyle: 'Dash',
        gridLineColor: 'rgba(255, 255, 255, .1)',
        title: {
          text: ''
        },
        labels: {
          style: {
            color: 'white'
          }
        }
      },
      plotOptions: {
        column: {
          borderColor: 'transparent',
          color: 'rgb(0, 174, 239, .9)'
        }
      },
      series: [{
        type: 'column',
        data: this.followersGrowth.map((followers: any) => followers.total)
      }]
    };
  }

}