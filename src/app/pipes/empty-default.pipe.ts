import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyDefault'
})
export class EmptyDefaultPipe implements PipeTransform {

  transform(value?: string): string {
    if(!value || !value.trim()){
      return 'tim_logo.png'
    }

    return value;
  }

}
