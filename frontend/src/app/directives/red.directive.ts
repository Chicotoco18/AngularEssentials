import { Directive, ElementRef, Inject } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color =  '#e35e6b';
   }

}
