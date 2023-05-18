import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.borderColor')
  borderColor = ''

  @HostBinding('style.color')
  color = ''

  constructor() { }

  @HostListener('input')
  onChange(){
    this.borderColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    this.color =  `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }
}
