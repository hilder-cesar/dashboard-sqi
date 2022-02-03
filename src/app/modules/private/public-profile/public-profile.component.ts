import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        plotShadow: false,
      },
      tooltip: {
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
      },
      legend: {
        itemStyle: {
          color: 'white',
          fontSize: '2rem'
        },
        itemHoverStyle: {
          color: '#ccc'
        },
        align: 'left',
        layout: 'vertical',
        verticalAlign: 'bottom',
        x: 40
      },
      plotOptions: {
        pie: {
          showInLegend: true,
          shadow: false,
          center: ['50%', '50%'],
          innerSize: '80%',
          size: '80%',
          dataLabels: {
            style: {
              color: 'white',
              border: 'none',
              fontSize: '2rem'
            },
            formatter: function () {
              return `${Number(((100 * (this.y || 0)) / (this.total || 0)))}%`;
            }
          }
        }
      },
      title: {
        text: ''
      },
      series: [
        {
          type: 'pie',
          data: [
            { name: 'Direita', color: '#29a9e1', y: 510 },
            { name: 'Esquerda', color: '#f83800', y: 80 },
            { name: 'Não politizados', color: '#ffbb13', y: 410 }
          ]
        }
      ]
    };
  }

}
