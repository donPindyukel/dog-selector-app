import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeUpFirstLetter'
})
export class MakeUpFirstLetterPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  }

}
