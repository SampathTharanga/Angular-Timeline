import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appRightNode]'
})
export class RightNodeDirective {
@Input() state:any;

  constructor() {
    //console.log(state);
   }

}
