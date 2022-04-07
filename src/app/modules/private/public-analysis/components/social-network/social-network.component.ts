import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { getColor, getSocialNetworkIcon } from 'src/app/utils/functions/social-network.function';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class NetworkComponent implements OnChanges {

  faQuestion = faQuestion;

  getSocialNetworkIcon = getSocialNetworkIcon;
  getColor = getColor;

  @Input() socialNetworkCount: any[] = [];
  totalValue: number = 0;

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.socialNetworkCount.currentValue) {
      this.totalValue = this.socialNetworkCount.reduce((prev, current) => prev + current.total, 0);
    }
  }

  getPercentage(value: number): number {
    return Math.round((100 * value) / this.totalValue);
  }

  imagePath(socialNetwork: string, disabled: boolean): string {
    switch (socialNetwork) {
      case 'G1': return disabled ? 'assets/icons/g1-disabled.svg' : 'assets/icons/g1.svg';
      case 'O Globo': return disabled ? 'assets/icons/globo-disabled.svg' : 'assets/icons/globo.svg';
      case 'Uol': return disabled ? 'assets/icons/uol-disabled.svg' : 'assets/icons/uol.svg';
      case 'Valor Econômico': return disabled ? 'assets/icons/valor-economico-disabled.svg' : 'assets/icons/valor-economico.svg';
      case 'Folha': return disabled ? 'assets/icons/folha-disabled.svg' : 'assets/icons/folha.svg';
      case 'Veja Online': return disabled ? 'assets/icons/veja-disabled.svg' : 'assets/icons/veja.svg';
      case 'Estadão': return disabled ? 'assets/icons/estadao-disabled.svg' : 'assets/icons/estadao.svg';
      case 'Terra': return disabled ? 'assets/icons/terra-disabled.svg' : 'assets/icons/terra.svg';
      case 'iG': return disabled ? 'assets/icons/ig-disabled.svg' : 'assets/icons/ig.svg';
      default: return '';
    }
  }

}
