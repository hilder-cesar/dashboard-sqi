import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { cloneDeep } from 'lodash';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { getColor } from 'src/app/utils/functions/political-profile.function';

// Services
import { AlertService } from 'src/app/utils/services/alert/alert.service';
import { FilterService } from 'src/app/utils/services/filter/filter.service';
import { GenericService } from 'src/app/utils/services/generic/generic.service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent extends OnDestroyClass implements OnInit {

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  constructor (
    private genericService: GenericService,
    private alert: AlertService,
    private filterService: FilterService
  ) { super(); }

  ngOnInit(): void {
    this.getCharts();
  }

  getCharts(): void {
    this.filterService.filterData
      .pipe(takeUntil(this.onDestroy), debounceTime(1000))
      .subscribe(() => {
        const filterData = cloneDeep(this.filterService.filterData.getValue());
        this.getPoliticalProfile(filterData);
      });
  }

  getPoliticalProfile(filterData: any): void {
    this.genericService.post('political-profile/count', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: any) => {
          this.initChart(response);
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  initChart(seriesData: any): void {
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
      credits: {
        enabled: false
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
              return `${Number(((100 * (this.y || 0)) / (this.total || 0))).toFixed(1)}%`;
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
          data: seriesData.map((serie: any) => {
            return {
              name: serie.name,
              color: getColor(serie.name),
              y: serie.total
            }
          })
        }
      ]
    };
  }

}
