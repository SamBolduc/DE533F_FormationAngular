import { Component } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component {

  backgroundColor?: string;

  backgroundColorChange(backgroundColor: string){
    this.backgroundColor = backgroundColor;
  }

  resetColor(){
    this.backgroundColor = undefined;
  }
}
