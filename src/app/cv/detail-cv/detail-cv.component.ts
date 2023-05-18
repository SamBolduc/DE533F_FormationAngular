import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from 'src/app/service/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent {
  @Input() cv: Cv | null = null;

  constructor(private embaucheService: EmbaucheService, private toastrService: ToastrService) {}

  embaucher() {
    if (this.cv) {
      let embaucher = this.embaucheService.embaucher(this.cv);
      if(embaucher){
        this.toastrService.success(`Vous venez d'embaucher ${this.cv.name}`)
      } else {
        this.toastrService.warning(`${this.cv.name} est deja embaucher`)
      }
    }
  }
}
