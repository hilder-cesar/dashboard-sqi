import { Component, OnInit } from '@angular/core';

// Chart
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsWordCloud from 'highcharts/modules/wordcloud';
import { cloneDeep } from 'lodash';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { WordCloudInterface } from 'src/app/utils/interfaces/wordcloud.interface';
import { AlertService } from 'src/app/utils/services/alert/alert.service';
import { FilterService } from 'src/app/utils/services/filter/filter.service';
import { GenericService } from 'src/app/utils/services/generic/generic.service';

HighchartsMore(Highcharts);
HighchartsWordCloud(Highcharts);

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss']
})
export class WordcloudComponent extends OnDestroyClass implements OnInit {

  Highcharts!: typeof Highcharts;
  chartOptions: Highcharts.Options = {};

  constructor (
    private alert: AlertService,
    private genericService: GenericService,
    private filterService: FilterService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getWordCloud();
  }

  getWordCloud(): void {
    this.filterService.filterData
      .pipe(takeUntil(this.onDestroy), debounceTime(1000))
      .subscribe(() => {
        const filterData = cloneDeep(this.filterService.filterData.getValue());
        filterData.startDate = filterData.startDate ? new Date(filterData.startDate).toISOString() : null;
        filterData.endDate = filterData.endDate ? new Date(filterData.endDate + '23:59:59').toISOString() : null;
        this.genericService.get('wordcloud')
          .pipe(takeUntil(this.onDestroy))
          .subscribe(
            (response: WordCloudInterface[]) => {
              this.alert.closeAlert();
              this.initChart(response);
            },
            (error: any) => {
              this.alert.showAlertError(error.message);
            }
          );
      });
  }

  initChart(wordCloudData: WordCloudInterface[]): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      chart: {
        type: 'wordcloud',
        backgroundColor: 'transparent'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'menções',
          type: 'wordcloud',
          spiral: 'rectangular',
          placementStrategy: 'center',
          colors: ['white', '#23a8e0', '#97d042'],
          data: wordCloudData
        }
      ]
    };
  }

}