import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortStr',  
})
export class ShortStr implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    const words = value.split(' ');
    return words.slice(0, 3).join(' ');
  }

}
