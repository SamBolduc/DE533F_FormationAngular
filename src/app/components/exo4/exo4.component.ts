import { Component } from '@angular/core';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.css'],
})
export class Exo4Component {
  myStyle = {
    fontFamily: '',
    fontSize: '12',
    color: ''
  };

  fontChange(font: string) {
    this.myStyle.fontFamily = font;
  }

  sizeChange(size: string) {
    this.myStyle.fontSize = `${size}px`;
  }

  colorChange(color: string) {
    this.myStyle.color = color;
  }
}
