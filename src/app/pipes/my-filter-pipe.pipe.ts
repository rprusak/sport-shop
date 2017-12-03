import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../common/order';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform {
  transform(items: Order[], filter: String): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.status === filter);
  }
}
