import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { takeUntil } from 'rxjs/operators';
import { OnDestroyClass } from 'src/app/utils/classes/on-destroy.class';
import { MentionsInterface } from 'src/app/utils/interfaces/mentions.interface';
import { AlertService } from 'src/app/utils/services/alert/alert.service';
import { GenericService } from 'src/app/utils/services/generic/generic.service';

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

  constructor (
    private genericService: GenericService,
    private alert: AlertService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getMentions();
  }

  getMentions(): void {
    this.genericService.get('feed')
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

}
