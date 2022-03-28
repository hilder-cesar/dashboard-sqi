import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

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
        reversed: false,
        itemStyle: {
          color: 'white'
        }
      },
      xAxis: {
        categories: ['twitter', 'facebook'],
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
      series: [{
        type: 'column',
        name: 'Positivos',
        data: [10, 30, 50, 10, 30],
        color: 'blue'
      }]
    };
  }

}
