import { Directive,  HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]',
})
export class GridItemImageDirective {  
  @HostBinding('style.grid-area') gridArea = 'image';
  @HostBinding('style.width')  @Input() appGridItemImage = '2rem';
  @HostBinding('style.height') height = this.appGridItemImage;
  @HostBinding('style.object-fit') objectFit = 'cover';
 
  @HostListener('click', ['$event.target'])
  handleClick(ev) {
    console.log(ev)
  }
}