import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CandidateInterFace } from '../../interfaces/candidate.interface';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  candidate = new BehaviorSubject<CandidateInterFace | null>(null);

}
