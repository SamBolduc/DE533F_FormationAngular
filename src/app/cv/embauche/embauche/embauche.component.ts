import { Component } from '@angular/core';
import { EmbaucheService } from 'src/app/service/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {

  constructor(private embaucheService: EmbaucheService){}

  get embauches(){
    return this.embaucheService.getEmbauches();
  }
}
