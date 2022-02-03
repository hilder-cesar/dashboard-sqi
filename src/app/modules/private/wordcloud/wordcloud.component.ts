import { Component, OnInit } from '@angular/core';

// Chart
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsWordCloud from 'highcharts/modules/wordcloud';

HighchartsMore(Highcharts);
HighchartsWordCloud(Highcharts);

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss']
})
export class WordcloudComponent implements OnInit {

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'wordcloud',
        backgroundColor: 'transparent'
      },
      title: {
        text: ''
      },
      tooltip: {
        enabled: false
      },
      series: [
        {
          type: 'wordcloud',
          spiral: 'rectangular',
          placementStrategy: 'center',
          colors: ['white', '#23a8e0', '#97d042'],
          data: [
            {
              name: 'Lorem',
              weight: 3
            },
            {
              name: 'Ipsum',
              weight: 2
            },
            {
              name: 'Dolor',
              weight: 1
            }
          ]
        }
      ]
    };
  }

}