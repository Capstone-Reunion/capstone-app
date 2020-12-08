import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderbyemail'
})
export class OrderbyemailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
