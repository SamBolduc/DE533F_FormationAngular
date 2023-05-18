import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      '1234',
      40,
      'trainer',
      'rotating_card_profile.png'
    ),
    new Cv(
      2,
      'sellaouti',
      'skander',
      '7777',
      4,
      'student',
      'rotating_card_profile2.png'
    ),
  ];

  selectedCv: Cv | null = null;

  selectCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}
