import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProcura'
})
export class FiltroProcuraPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) return [];
    if (value) {
      return items.filter(item => item.nome.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1);
    }
    else {
      return items;
    }
  }

}
