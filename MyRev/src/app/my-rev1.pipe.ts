import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev1'
})
export class MyRev1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
