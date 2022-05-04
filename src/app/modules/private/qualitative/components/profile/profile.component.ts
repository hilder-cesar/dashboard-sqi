import { Component } from '@angular/core';
import { CandidateService } from 'src/app/utils/services/candidate/candidate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(
    public candidateService: CandidateService
  ) { }

  ngOnInit(): void {
    console.log(this.candidateService.candidate.getValue());
  }

}
