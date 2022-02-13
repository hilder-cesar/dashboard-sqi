import { Component, OnInit } from '@angular/core';

// Chart
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsWordCloud from 'highcharts/modules/wordcloud';
import { takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { WordCloudInterface } from 'src/app/utils/interfaces/wordcloud.interface';
import { AlertService } from 'src/app/utils/services/alert/alert.service';
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
    private genericService: GenericService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getWordCloud();
  }

  getWordCloud(): void {
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