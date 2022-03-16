import { Component, Input } from '@angular/core';
import { faBlogger, faFacebook, faFlickr, faGoogle, faInstagram, faTwitter, faWordpress, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class NetworkComponent {

  @Input() socialNetworkCount: any[] = [];

  getSocialIcon(socialName: string): any {
    switch (socialName) {
      case 'Twitter': return faTwitter;
      case 'Instagram': return faInstagram;
      case 'Facebook': return faFacebook;
      case 'Blogs': return faBlogger;
      case 'Wordpress': return faWordpress;
      case 'Flickr': return faFlickr;
      case 'YouTube': return faYoutube;
      case 'Google News': return faGoogle;
      case 'G1': return faGlobe;
      case 'Outras Mídias': return faQuestion;
    }
  }

}
