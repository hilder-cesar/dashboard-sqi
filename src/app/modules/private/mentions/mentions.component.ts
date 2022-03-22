import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { MentionsInterface } from 'src/app/utils/interfaces/mentions.interface';
import { AlertService } from 'src/app/utils/services/alert/alert.service';
import { FilterService } from 'src/app/utils/services/filter/filter.service';
import { GenericService } from 'src/app/utils/services/generic/generic.service';
import { cloneDeep } from 'lodash';
import { getIcon } from 'src/app/utils/functions/mentions.functions';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.scss']
})
export class MentionsComponent extends OnDestroyClass implements OnInit {

  // Icons
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  // mentions
  mentionsList: MentionsInterface[] = [];
  influencersList: any[] = [];

  getIcon = getIcon;

  constructor (
    private genericService: GenericService,
    private alert: AlertService,
    private filterService: FilterService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.filterService.filterData
      .pipe(takeUntil(this.onDestroy), debounceTime(1000))
      .subscribe(() => {
        const filterData = cloneDeep(this.filterService.filterData.getValue());
        filterData.startDate = filterData.startDate ? new Date(filterData.startDate).toISOString() : null;
        filterData.endDate = filterData.endDate ? new Date(filterData.endDate + 'T23:59:59').toISOString() : null;
        this.getMentions(filterData);
        this.getInfluencers(filterData);
      });
  }

  getMentions(filterData: any): void {
    this.genericService.post('feed', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: MentionsInterface[]) => {
          this.mentionsList = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

  getInfluencers(filterData: any): void {
    this.genericService.post('feed/influential', filterData)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(
        (response: MentionsInterface[]) => {
          this.influencersList = response;
          this.alert.closeAlert();
        },
        (error: any) => {
          this.alert.showAlertError(error.message);
        }
      );
  }

}
