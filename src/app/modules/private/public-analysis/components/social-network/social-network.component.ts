import { Component, Input } from '@angular/core';
import { getColor, getIcon } from 'src/app/utils/functions/social-network.function';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class NetworkComponent {

  getIcon = getIcon;
  getColor = getColor;

  @Input() socialNetworkCount: any[] = [];

}
