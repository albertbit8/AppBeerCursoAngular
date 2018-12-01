import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceCurrency'
})
export class SpaceCurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace('R$', 'R$ ');
  }

}
