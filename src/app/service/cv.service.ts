import { Injectable } from '@angular/core';
import { Cv } from '../cv/model/cv';
import { EmbaucheService } from './embauche.service';

@Injectable({
  providedIn: 'root',
})
export class CvService {
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
    new Cv(3, 'test', 'vide', '43241', 551, 'tl', ''),
    new Cv(4, 'test42141', 'whitespace', '421', 125, 'joueur', '   '),
  ];
  constructor(private embaucheService: EmbaucheService) {}

  findById(id: number): Cv | undefined {
    return this.cvs.find(x=> x.id === id);
  }

  deleteCv(cv: Cv){
    const index = this.cvs.indexOf(cv);
    if(index !== -1){
      this.cvs.splice(index, 1);
      this.embaucheService.deleteCv(cv);
    }
  }
}
