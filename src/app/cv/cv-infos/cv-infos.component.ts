import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from 'src/app/service/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-infos',
  templateUrl: './cv-infos.component.html',
  styleUrls: ['./cv-infos.component.css'],
})
export class CvInfosComponent implements OnInit {
  cv?: Cv;

  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      const cv = this.cvService.findById(parseInt(id));
      if(cv){
        this.cv = cv;
        return;
      }
    }

    this.toastr.error("Ce CV n'existe pas");
    this.router.navigate(['cv']);
  }

  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate(['cv']);
    }
  }
}
