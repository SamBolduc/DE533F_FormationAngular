import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from 'src/app/service/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedCv: Cv | null = null;

  constructor(private cvService: CvService){}

  selectCv(cv: Cv): void {
    this.selectedCv = cv;
  }

  get cvs(){
    return this.cvService.cvs;
  }
}
