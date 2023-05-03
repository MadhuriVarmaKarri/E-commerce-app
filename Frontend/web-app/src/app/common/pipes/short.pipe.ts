import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string, limit: number, ellipsis = '...'): string {
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }

}
