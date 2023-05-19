import { Injectable } from '@angular/core';
import { Cv } from '../cv/model/cv';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private embauches: Cv[] = []

  constructor() { }

  getEmbauches(){
    return this.embauches;
  }

  embaucher(cv: Cv): boolean{
    if(this.embauches.indexOf(cv) === -1){
      this.embauches.push(cv)
      return true;
    }

    return false;
  }

  deleteCv(cv: Cv){
    const index = this.embauches.indexOf(cv);
    if(index !== -1){
      this.embauches.splice(index, 1);
    }
  }
}
