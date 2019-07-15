import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any, type: string): any[] {

    if (!Array.isArray(array)) {
      return;
    }
    if (type == 'asc' || type == null || type == undefined) {
      array.sort((a: any, b: any) => {
        if (a.value < b.value) {
          return -1;
        } else if (a.value > b.value) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      array.sort((a: any, b: any) => {
        if (a.value > b.value) {
          return -1;
        } else if (a.value < b.value) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return array;
  }

}
