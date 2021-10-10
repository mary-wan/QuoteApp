import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighestVote]'
})
export class HighestVoteDirective {

  constructor(private elem: ElementRef){
    this.elem.nativeElement.style.backgroundColor='cyan';// change background color of most highlighted quote to cyan
}

}
